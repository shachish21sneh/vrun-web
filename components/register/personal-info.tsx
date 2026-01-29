/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";

const formSchema = z.object({
  fullname: z.string().min(2, "Name must be at least 2 characters"),
  phone: z.string().min(10, "Please enter a valid phone number"),
  email: z.string().email("Please enter a valid email address"),
  address: z.string().min(10, "Address must be at least 10 characters"),
  termsAccepted: z.boolean().refine((val) => val === true, {
    message: "You must accept the terms and conditions",
  }),
});

interface PersonalInfoProps {
  data: {
    fullname: string;
    phone: string;
    email: string;
    address: string;
    termsAccepted: boolean;
  };
  onUpdate: (data: any) => void;
  onNext: () => void;
}

export function PersonalInfo({ data, onUpdate, onNext }: PersonalInfoProps) {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: data,
  });

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    onUpdate(values);
    onNext();
  };

  return (
    <div>
      <h2 className="text-3xl font-semibold  mb-8">Let&apos;s Get Started!</h2>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <FormField
            control={form.control}
            name="fullname"
            render={({ field }) => (
              <FormItem>
                <Label className="">Your fullname</Label>
                <FormControl>
                  <Input {...field} placeholder="Enter your name here" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="phone"
            render={({ field }) => (
              <FormItem>
                <Label className="">Phone</Label>
                <FormControl>
                  <Input {...field} placeholder="Enter your phone no. here" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <Label className="">Email</Label>
                <FormControl>
                  <Input
                    {...field}
                    type="email"
                    placeholder="example@email.com"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="address"
            render={({ field }) => (
              <FormItem>
                <Label className="">Address</Label>
                <FormControl>
                  <Input
                    {...field}
                    type="text"
                    placeholder="Bangalore, Karnataka"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="termsAccepted"
            render={({ field }) => (
              <FormItem className="flex items-start space-x-3 space-y-0">
                <FormControl>
                  <Checkbox
                    checked={field.value}
                    onCheckedChange={field.onChange}
                  />
                </FormControl>
                <Label className=" font-normal">
                  I agree to terms & conditions
                </Label>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button
            type="submit"
            className="w-full bg-[#0056A0] hover:bg-[#0056A0]/90"
          >
            Register Now
          </Button>
        </form>
      </Form>
    </div>
  );
}
