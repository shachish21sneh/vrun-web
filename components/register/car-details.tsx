/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";

const formSchema = z.object({
  brand: z.string().min(1, "Please enter the car brand"),
  model: z.string().min(1, "Please select the car model"),
  manufacturingDate: z.string().min(1, "Please enter the manufacturing date"),
});

interface CarDetailsProps {
  data: {
    brand: string;
    model: string;
    manufacturingDate: string;
  };
  onUpdate: (data: any) => void;
  onSubmit: () => void;
}

const carBrands = ["Mahindra", "Maruti", "Tata", "Honda", "Hyundai"];

export function CarDetails({ data, onUpdate, onSubmit }: CarDetailsProps) {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: data,
  });

  const handleSubmit = (values: z.infer<typeof formSchema>) => {
    onUpdate(values);
    onSubmit();
  };

  return (
    <div>
      <h2 className="text-3xl font-semibold  mb-8">Add car details</h2>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-6">
          <FormField
            control={form.control}
            name="brand"
            render={({ field }) => (
              <FormItem>
                <Label className="">Enter car brand</Label>
                <FormControl>
                  <Input {...field} placeholder="XUV 3XO" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="model"
            render={({ field }) => (
              <FormItem>
                <Label className="">Enter car model</Label>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Select car brand" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {carBrands.map((brand) => (
                      <SelectItem key={brand} value={brand}>
                        {brand}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="manufacturingDate"
            render={({ field }) => (
              <FormItem>
                <Label className="">Car manufacturing date</Label>
                <FormControl>
                  <Input {...field} type="date" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button
            type="submit"
            className="w-full bg-[#0056A0] hover:bg-[#0056A0]/90"
          >
            Complete Registration
          </Button>
        </form>
      </Form>
    </div>
  );
}
