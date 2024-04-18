import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { toast } from "sonner";
import {
   Form,
   FormControl,
   FormField,
   FormItem,
   FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const formSchema = z.object({
   value: z.string().min(2, {
      message: "Enter at least 2 characters.",
   }),
});

const HeroForm = () => {
   const form = useForm<z.infer<typeof formSchema>>({
      resolver: zodResolver(formSchema),
      defaultValues: {
         value: "",
      },
   });

   const onSubmit = (values: z.infer<typeof formSchema>) => {
      toast.success(
         "Form Submitted successfully. Values: " + JSON.stringify(values)
      );
   };

   return (
      <Form {...form}>
         <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <FormField
               control={form.control}
               name="value"
               render={({ field }) => (
                  <FormItem className="mx-auto lg:max-w-xl">
                     <FormMessage />
                     <FormControl>
                        <div className="h-[74px] grid grid-cols-[1fr_74px]">
                           <Input
                              placeholder="design | "
                              className="h-full pl-5 rounded-r-none border-2 border-r-0 focus-visible:border-ring focus-visible:ring-transparent"
                              {...field}
                           />

                           <Button
                              type="submit"
                              size="icon"
                              className="relative right-1.5 size-full bg-[#FFBE2E] hover:bg-[#FFBE2E]/90"
                           >
                              <img
                                 loading="lazy"
                                 src="/home/back-icon-black.svg"
                                 className="size-6"
                              />
                           </Button>
                        </div>
                     </FormControl>
                  </FormItem>
               )}
            />
         </form>
      </Form>
   );
};

export default HeroForm;
