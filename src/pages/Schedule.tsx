import {
  Book,
  CalendarDays,
  Clock,
  User,
  Plus,
  type LucideProps,
} from "lucide-react";
import { useState, useMemo } from "react";
import Text from "../components/ui/text";
import { Button } from "../components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "../components/ui/tooltip";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "../components/ui/dialog";
import { Label } from "../components/ui/label";
import { Input } from "../components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../components/ui/select";
import { useForm } from "react-hook-form";
import { colorOptions, days, times } from "../data/scheduleData";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { axiosPublic } from "../lib/axios";
import { HashLoader, SkewLoader } from "react-spinners";
import toast from "react-hot-toast";
import { UserAuth } from "../context/AuthContext";
import type { ClassProps, SaveFormInputs } from "../types/schedule";
import { getColorClass } from "../utils/getColorClass";

const Schedule = () => {
  const queryClient = useQueryClient();

  const { session } = UserAuth();
  // Fetch all schedules
  const {
    data = [],
    isLoading,
    error,
  } = useQuery({
    queryKey: ["schedule"],
    queryFn: async () => {
      const res = await axiosPublic.get("/schedules");
      return res.data;
    },
  });

  // Update schedule mutation
  const updateScheduleMutation = useMutation({
    mutationFn: async (updatedClass: ClassProps) => {
      const res = await axiosPublic.put(
        `/schedules/${updatedClass.id}`,
        updatedClass
      );
      return res.data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["schedule"] });
      toast.success("Class schedule updated successfully!");

      setEditDialogOpen(false);
      setSelectedClass(null);
    },
    onError: (error) => {
      console.error("Failed to update schedule:", error);
      toast.error("Failed to update class. Try again!");
    },
  });

  // Delete schedule mutation
  const deleteScheduleMutation = useMutation({
    mutationFn: async (id: string) => {
      const res = await axiosPublic.delete(`/schedule/${id}`);
      return res.data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["schedule"] });
      toast.success("Class deleted successfully!");
    },
    onError: (error) => {
      console.error("Failed to delete schedule:", error);
      toast.error("Failed to delete class. Try again!");
    },
  });

  // Add schedule mutation
  const addScheduleMutation = useMutation({
    mutationFn: async (newClass: Omit<ClassProps, "id">) => {
      const res = await axiosPublic.post("/schedule", {
        ...newClass,
        user_id: session?.user?.id,
      });
      return res.data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["schedule"] });
      toast.success("Class schedule added successfully!");
      setAddDialogOpen(false);
    },
    onError: (error) => {
      console.error("Failed to add schedule:", error);
      toast.error("Failed to add class. Try again!");
    },
  });

  const fixNameFormat = (name: string = "") =>
    name
      .split(" ")
      .map((n) => n.charAt(0).toUpperCase() + n.slice(1).toLowerCase())
      .join(" ");

  const fixDayFormat = (day: string = "") =>
    day.charAt(0).toUpperCase() + day.slice(1).toLowerCase();

  const [editDialogOpen, setEditDialogOpen] = useState(false);
  const [addDialogOpen, setAddDialogOpen] = useState(false);
  const [selectedClass, setSelectedClass] = useState<ClassProps | null>(null);
  const [selectedCell, setSelectedCell] = useState<{
    day: string;
    time: string;
  } | null>(null);

  const {
    register: editRegister,
    handleSubmit: handleEditSubmit,
    formState: { errors: editErrors },
    setValue: setEditValue,
  } = useForm<SaveFormInputs>();

  const {
    register: addRegister,
    handleSubmit: handleAddSubmit,
    formState: { errors: addErrors },
    setValue: setAddValue,
    reset: resetAddForm,
  } = useForm<SaveFormInputs>();

  const handleEditSave = (formData: SaveFormInputs) => {
    if (!selectedClass?.id) return;

    const updatedClass: ClassProps = {
      ...selectedClass,
      ...formData,
    };

    updateScheduleMutation.mutate(updatedClass);
  };

  const handleAddSave = (formData: SaveFormInputs) => {
    const newClass: Omit<ClassProps, "id"> = {
      subject: formData.subject.toLowerCase(),
      instructor: formData.instructor.toLowerCase(),
      day: formData.day,
      startTime: formData.startTime,
      endTime: formData.endTime,
      color: formData.color,
    };

    addScheduleMutation.mutate(newClass);
  };

  const handleDelete = (classToDelete: ClassProps) => {
    if (classToDelete.id) {
      deleteScheduleMutation.mutate(classToDelete.id);
    }
  };

  const handleAddClass = (day: string, time: string) => {
    setSelectedCell({ day, time });
    setAddValue("day", day);
    setAddValue("startTime", time);
    setAddDialogOpen(true);
  };

  // Memoize schedule lookup for performance
  const scheduleMap = useMemo(() => {
    const map = new Map();
    data.forEach((cls: ClassProps) => {
      const key = `${fixDayFormat(cls.day)}-${cls.startTime}`;
      map.set(key, cls);
    });
    return map;
  }, [data]);

  const label = (
    Icon: React.ComponentType<LucideProps>,
    labelKey: string,
    labelValue: string
  ) => (
    <div className="flex justify-between gap-8">
      <div className="flex items-center gap-2">
        <Icon className="w-4 h-4 text-neutral-400" />
        <Text variant="small" className="text-neutral-400 uppercase">
          {labelKey}
        </Text>
      </div>
      <Text variant="small" className="text-white uppercase">
        {labelValue}
      </Text>
    </div>
  );

  const onHoverContent = (children: React.ReactNode, cls: ClassProps) => (
    <Tooltip>
      <TooltipTrigger asChild>
        <div>{children}</div>
      </TooltipTrigger>
      <TooltipContent className="p-4 rounded-xl">
        <div className="space-y-4">
          {label(Book, "Subject", cls.subject)}
          {label(User, "Instructor", fixNameFormat(cls.instructor))}
          {label(
            Clock,
            "Time",
            `${cls.startTime}${cls.endTime ? ` - ${cls.endTime}` : ""}`
          )}
          {label(CalendarDays, "Day", fixDayFormat(cls.day))}
        </div>
        <div className="mt-4 flex items-center justify-between">
          <Button
            variant="destructive"
            onClick={(e) => {
              e.stopPropagation();
              handleDelete(cls);
            }}
            disabled={deleteScheduleMutation.isPending}
          >
            {deleteScheduleMutation.isPending ? (
              <SkewLoader color="#ffffff" size={10} />
            ) : (
              "Delete"
            )}
          </Button>
          <Button
            variant="secondary"
            onClick={(e) => {
              e.stopPropagation();
              setSelectedClass(cls);
              // Pre-populate form with current values
              setEditValue("subject", cls.subject);
              setEditValue("instructor", cls.instructor);
              setEditValue("startTime", cls.startTime);
              setEditValue("endTime", cls.endTime || "");
              setEditValue("day", cls.day);
              setEditValue("color", cls.color);
              setEditDialogOpen(true);
            }}
          >
            Edit
          </Button>
        </div>
      </TooltipContent>
    </Tooltip>
  );

  if (isLoading) {
    return (
      <div className="layout relative w-full h-screen flex items-center justify-center">
        <HashLoader color="#ffffff" size={40} />
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex items-center justify-center h-64">
        <Text variant="p" className="text-red-500">
          Failed to load schedule
        </Text>
      </div>
    );
  }

  return (
    <div>
      {/* Edit Dialog */}
      <Dialog open={editDialogOpen} onOpenChange={setEditDialogOpen}>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Edit Class</DialogTitle>
            <DialogDescription>
              Update details of your class. Save when done.
            </DialogDescription>
          </DialogHeader>

          {selectedClass && (
            <form
              className="grid gap-4"
              onSubmit={handleEditSubmit(handleEditSave)}
            >
              {/* Subject */}
              <div className="grid gap-1.5">
                <Label htmlFor="edit-subject">Subject</Label>
                <Input
                  className="capitalize"
                  id="edit-subject"
                  {...editRegister("subject", {
                    required: "Subject is required",
                    minLength: { value: 2, message: "At least 2 characters" },
                  })}
                />
                {editErrors.subject && (
                  <Text variant="error">{editErrors.subject.message}</Text>
                )}
              </div>

              {/* Instructor */}
              <div className="grid gap-1.5">
                <Label htmlFor="edit-instructor">Instructor</Label>
                <Input
                  className="capitalize"
                  id="edit-instructor"
                  {...editRegister("instructor", {
                    required: "Instructor is required",
                    minLength: { value: 2, message: "At least 2 characters" },
                  })}
                />
                {editErrors.instructor && (
                  <Text variant="error">{editErrors.instructor.message}</Text>
                )}
              </div>

              {/* Day */}
              <div className="grid gap-1.5">
                <Label htmlFor="edit-day">Day</Label>
                <Select
                  onValueChange={(value) => setEditValue("day", value)}
                  defaultValue={selectedClass.day}
                >
                  <SelectTrigger className="w-full border-neutral-800 bg-neutral-900">
                    <SelectValue placeholder="Select day" />
                  </SelectTrigger>
                  <SelectContent className="rounded-xl bg-neutral-900 border-neutral-800 text-white">
                    {days.map((day) => (
                      <SelectItem key={day} value={day.toLowerCase()}>
                        {day}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {/* Start Time */}
              <div className="grid gap-1.5">
                <Label htmlFor="edit-startTime">Start Time</Label>
                <Select
                  defaultValue={selectedClass.startTime}
                  onValueChange={(value) => setEditValue("startTime", value)}
                >
                  <SelectTrigger className="w-full border-neutral-800 bg-neutral-900">
                    <SelectValue placeholder="Select start time" />
                  </SelectTrigger>
                  <SelectContent className="rounded-xl bg-neutral-900 border-neutral-800 text-white">
                    {times.map((time) => (
                      <SelectItem key={time} value={time}>
                        {time}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {/* End Time */}
              <div className="grid gap-1.5">
                <Label htmlFor="edit-endTime">End Time</Label>
                <Select
                  defaultValue={selectedClass.endTime}
                  onValueChange={(value) => setEditValue("endTime", value)}
                >
                  <SelectTrigger className="w-full  border-neutral-800 bg-neutral-900">
                    <SelectValue placeholder="Select end time" />
                  </SelectTrigger>
                  <SelectContent className="rounded-xl bg-neutral-900 border-neutral-800 text-white">
                    {times.map((time) => (
                      <SelectItem key={time} value={time}>
                        {time}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {/* Color */}
              <div className="grid gap-1.5">
                <Label htmlFor="edit-color">Color</Label>
                <Select
                  defaultValue={selectedClass.color}
                  onValueChange={(value) => setEditValue("color", value)}
                >
                  <SelectTrigger
                    className="w-full border-neutral-800 bg-neutral-900"
                    aria-label="Select a color"
                  >
                    <SelectValue placeholder="Select color" />
                  </SelectTrigger>
                  <SelectContent className="rounded-xl bg-neutral-900 border-neutral-800 text-white">
                    {colorOptions.map((color) => (
                      <SelectItem key={color.value} value={color.value}>
                        <div className="flex items-center gap-2">
                          <div
                            className={`w-4 h-4 rounded-full bg-gradient-to-r from-neutral-800/50 ${color.class}`}
                          />
                          {color.label}
                        </div>
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <DialogFooter>
                <DialogClose asChild>
                  <Button variant="destructive" type="button">
                    Cancel
                  </Button>
                </DialogClose>
                <Button
                  type="submit"
                  variant="secondary"
                  disabled={updateScheduleMutation.isPending}
                >
                  {updateScheduleMutation.isPending ? (
                    <SkewLoader color="#000" size={10} />
                  ) : (
                    "Save changes"
                  )}
                </Button>
              </DialogFooter>
            </form>
          )}
        </DialogContent>
      </Dialog>

      {/* Add Dialog */}
      <Dialog
        open={addDialogOpen}
        onOpenChange={(open) => {
          setAddDialogOpen(open);
          if (!open) {
            resetAddForm();
            setSelectedCell(null);
          }
        }}
      >
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Add New Class</DialogTitle>
            <DialogDescription>
              Add a new class to your schedule.
            </DialogDescription>
          </DialogHeader>

          <form
            className="grid gap-4"
            onSubmit={handleAddSubmit(handleAddSave)}
          >
            {/* Subject */}
            <div className="grid gap-1.5">
              <Label htmlFor="add-subject">Subject</Label>
              <Input
                id="add-subject"
                {...addRegister("subject", {
                  required: "Subject is required",
                  minLength: { value: 2, message: "At least 2 characters" },
                })}
              />
              {addErrors.subject && (
                <Text variant="error">{addErrors.subject.message}</Text>
              )}
            </div>

            {/* Instructor */}
            <div className="grid gap-1.5">
              <Label htmlFor="add-instructor">Instructor</Label>
              <Input
                id="add-instructor"
                {...addRegister("instructor", {
                  required: "Instructor is required",
                  minLength: { value: 2, message: "At least 2 characters" },
                })}
              />
              {addErrors.instructor && (
                <Text variant="error">{addErrors.instructor.message}</Text>
              )}
            </div>

            {/* Day */}
            <div className="grid gap-1.5">
              <Label htmlFor="add-day">Day</Label>
              <Select
                onValueChange={(value) => setAddValue("day", value)}
                defaultValue={selectedCell?.day?.toLowerCase()}
              >
                <SelectTrigger className="w-full border-neutral-800 bg-neutral-900">
                  <SelectValue placeholder="Select day" />
                </SelectTrigger>
                <SelectContent className="rounded-xl bg-neutral-900 border-neutral-800 text-white">
                  {days.map((day) => (
                    <SelectItem key={day} value={day.toLowerCase()}>
                      {day}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {/* Start Time */}
            <div className="grid gap-1.5">
              <Label htmlFor="add-startTime">Start Time</Label>
              <Select
                required
                onValueChange={(value) => setAddValue("startTime", value)}
                defaultValue={selectedCell?.time}
              >
                <SelectTrigger className="w-full border-neutral-800 bg-neutral-900">
                  <SelectValue placeholder="Select start time" />
                </SelectTrigger>
                <SelectContent className="rounded-xl bg-neutral-900 border-neutral-800 text-white">
                  {times.map((time) => (
                    <SelectItem key={time} value={time}>
                      {time}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {/* End Time */}
            <div className="grid gap-1.5">
              <Label htmlFor="add-endTime">End Time</Label>
              <Select
                required
                onValueChange={(value) => setAddValue("endTime", value)}
              >
                <SelectTrigger className="w-full border-neutral-800 bg-neutral-900">
                  <SelectValue placeholder="Select end time" />
                </SelectTrigger>
                <SelectContent className="rounded-xl bg-neutral-900 border-neutral-800 text-white">
                  {times.map((time) => (
                    <SelectItem key={time} value={time}>
                      {time}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {/* Color */}
            <div className="grid gap-1.5">
              <Label htmlFor="add-color">Color</Label>
              <Select
                required
                onValueChange={(value) => setAddValue("color", value)}
              >
                <SelectTrigger className="w-full border-neutral-800 bg-neutral-900">
                  <SelectValue placeholder="Select color" />
                </SelectTrigger>
                <SelectContent className="rounded-xl bg-neutral-900 border-neutral-800 text-white">
                  {colorOptions.map((color) => (
                    <SelectItem key={color.value} value={color.value}>
                      <div className="flex items-center gap-2">
                        <div
                          className={`w-4 h-4 rounded-full bg-gradient-to-r from-neutral-800/50 ${color.class}`}
                        />
                        {color.label}
                      </div>
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <DialogFooter>
              <DialogClose asChild>
                <Button variant="destructive" type="button">
                  Cancel
                </Button>
              </DialogClose>
              <Button
                type="submit"
                variant="secondary"
                disabled={addScheduleMutation.isPending}
              >
                {addScheduleMutation.isPending ? (
                  <SkewLoader color="#000" size={10} />
                ) : (
                  "Add Class"
                )}
              </Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>

      {/* Header */}
      <div className="mb-6">
        <Text
          as="h1"
          className="text-white font-semibold capitalize mb-4"
          variant="h1"
        >
          Class Schedule Tracker
        </Text>
        <Text as="p" variant="p" className="text-neutral-500">
          Effortlessly organize and manage your weekly classes. Add, edit, or
          remove sessions while keeping track of subjects, instructors, and
          timings at a glance.
        </Text>
      </div>

      {/* Schedule Table */}
      <div className="overflow-x-auto rounded-xl">
        <table className="min-w-full">
          <thead>
            <tr className="bg-neutral-900/50 backdrop-blur-sm">
              <th className="border-r border-neutral-800/50 px-6 py-4 text-left">
                <span className="text-neutral-300 font-medium text-sm uppercase tracking-wider">
                  Time
                </span>
              </th>
              {days.map((day) => (
                <th
                  key={day}
                  className="border-r border-neutral-800/50 px-6 py-4 text-center last:border-r-0"
                >
                  <Text
                    variant="small"
                    className="text-sm font-normal uppercase tracking-wider"
                  >
                    {day}
                  </Text>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {times.map((time, timeIndex) => (
              <tr
                key={time}
                className={`${
                  timeIndex % 2 === 0
                    ? "bg-neutral-900/20"
                    : "bg-neutral-900/40"
                } hover:bg-neutral-800/30 transition-colors duration-200`}
              >
                <td className="border-r border-neutral-700/30 px-6 py-4">
                  <Text variant="small" className="font-normal">
                    {time}
                  </Text>
                </td>
                {days.map((day) => {
                  const cls = scheduleMap.get(`${fixDayFormat(day)}-${time}`);
                  return (
                    <td
                      key={day + time}
                      className={`border-r border-neutral-700/30 px-4 py-4 last:border-r-0 ${
                        cls
                          ? `bg-gradient-to-r from-neutral-800/10 ${getColorClass(
                              cls.color
                            )}`
                          : ""
                      } transition-all duration-200 hover:bg-neutral-800/50 relative group`}
                    >
                      {cls ? (
                        onHoverContent(
                          <div className="space-y-1 cursor-pointer">
                            <Text
                              variant="p"
                              className="font-medium capitalize"
                            >
                              {cls.subject}
                            </Text>
                            <Text variant="small" className="text-neutral-400">
                              {fixNameFormat(cls.instructor)}
                            </Text>
                          </div>,
                          cls
                        )
                      ) : (
                        <div className="h-12 flex items-center justify-center">
                          <button
                            onClick={() =>
                              handleAddClass(day.toLowerCase(), time)
                            }
                            className="opacity-0 group-hover:opacity-100 transition-opacity duration-200 p-2 rounded-full hover:bg-neutral-700/50"
                            title="Add class"
                          >
                            <Plus className="w-4 h-4 text-neutral-400" />
                          </button>
                          <div className="w-1 h-1 bg-neutral-600 rounded-full opacity-30 group-hover:opacity-0 transition-opacity duration-200" />
                        </div>
                      )}
                    </td>
                  );
                })}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Schedule;
