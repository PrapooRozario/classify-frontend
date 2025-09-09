import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { axiosPublic } from "../lib/axios";
import type { ClassProps } from "../types/schedule";

export const useSchedule = (userId?: string) => {
  const queryClient = useQueryClient();

  const scheduleQuery = useQuery({
    queryKey: ["schedule"],
    queryFn: async () => {
      const res = await axiosPublic.get("/schedules");
      return res.data;
    },
  });

  const updateScheduleMutation = useMutation({
    mutationFn: async (updatedClass: ClassProps) => {
      if (!updatedClass.id) {
        throw new Error("Class ID is required for update");
      }
      const res = await axiosPublic.put(
        `/schedules/${updatedClass.id}`,
        updatedClass
      );
      return res.data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["schedule"] });
      toast.success("Class schedule updated successfully!");
    },
    onError: (error) => {
      console.error("Failed to update schedule:", error);
      toast.error("Failed to update class. Please try again!");
    },
  });

  const deleteScheduleMutation = useMutation({
    mutationFn: async (id: string) => {
      const res = await axiosPublic.delete(`/schedules/${id}`);
      return res.data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["schedule"] });
      toast.success("Class deleted successfully!");
    },
    onError: (error) => {
      console.error("Failed to delete schedule:", error);
      toast.error("Failed to delete class. Please try again!");
    },
  });

  const addScheduleMutation = useMutation({
    mutationFn: async (newClass: Omit<ClassProps, "id">) => {
      const res = await axiosPublic.post("/schedule", {
        ...newClass,
        user_id: userId,
      });
      return res.data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["schedule"] });
      toast.success("Class schedule added successfully!");
    },
    onError: (error) => {
      console.error("Failed to add schedule:", error);
      toast.error("Failed to add class. Please try again!");
    },
  });

  return {
    scheduleQuery,
    updateScheduleMutation,
    deleteScheduleMutation,
    addScheduleMutation,
  };
};