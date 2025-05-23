
import React, { useState } from 'react';
import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { toast } from 'sonner';
import { 
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Checkbox } from '@/components/ui/checkbox';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Label } from '@/components/ui/label';

const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  phoneNumber: z.string().min(10, { message: "Please enter a valid phone number." }),
  companyName: z.string().optional(),
  role: z.enum(["contractor", "unionRep", "trustee", "other"], {
    required_error: "Please select your role."
  }),
  otherRole: z.string().optional().nullable(),
  reason: z.string().optional(),
  currentMethod: z.enum(["manual", "payroll", "union", "notSure"], {
    required_error: "Please select your current method."
  }),
  employeeCount: z.enum(["1-10", "11-50", "51-200", "200+"], {
    required_error: "Please select the number of employees."
  }),
  agreeToTerms: z.boolean().refine(val => val === true, {
    message: "You must agree to the terms and conditions."
  })
});

type FormValues = z.infer<typeof formSchema>;

const SignUpForm = () => {
  const [step, setStep] = useState(1);
  const [roleRequiresOther, setRoleRequiresOther] = useState(false);

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phoneNumber: "",
      companyName: "",
      role: undefined,
      otherRole: "",
      reason: "",
      currentMethod: undefined,
      employeeCount: undefined,
      agreeToTerms: false
    }
  });

  const onSubmit = (values: FormValues) => {
    console.log("Form submitted:", values);
    toast.success("Thanks for signing up! We'll be in touch soon.");
    // In a real app, you would submit this data to your backend
  };
  
  const handleContinue = async () => {
    if (step === 1) {
      const isValid = await form.trigger(['name', 'email', 'phoneNumber', 'companyName']);
      if (isValid) setStep(2);
    } else if (step === 2) {
      const isValid = await form.trigger(['role', 'otherRole']);
      if (isValid) setStep(3);
    }
  };

  const handleRoleChange = (value: string) => {
    form.setValue("role", value as any);
    setRoleRequiresOther(value === "other");
    
    if (value !== "other") {
      form.setValue("otherRole", "");
    }
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        {step === 1 && (
          <div className="space-y-6">
            <h2 className="text-xl font-semibold text-gray-800">Enter Details</h2>
            
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Name <span className="text-red-500">*</span></FormLabel>
                  <FormControl>
                    <Input placeholder="Your name" {...field} />
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
                  <FormLabel>Email <span className="text-red-500">*</span></FormLabel>
                  <FormControl>
                    <Input placeholder="your.email@example.com" type="email" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <FormField
              control={form.control}
              name="phoneNumber"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Phone Number <span className="text-red-500">*</span></FormLabel>
                  <FormControl>
                    <Input placeholder="(123) 456-7890" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <FormField
              control={form.control}
              name="companyName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Company name</FormLabel>
                  <FormControl>
                    <Input placeholder="Your company" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <div className="pt-4">
              <Button type="button" onClick={handleContinue}>Continue</Button>
            </div>
          </div>
        )}
        
        {step === 2 && (
          <div className="space-y-6">
            <h2 className="text-xl font-semibold text-gray-800">Your Role</h2>
            
            <FormField
              control={form.control}
              name="role"
              render={({ field }) => (
                <FormItem className="space-y-3">
                  <FormLabel>Which best describes your role? <span className="text-red-500">*</span></FormLabel>
                  <FormControl>
                    <RadioGroup 
                      className="space-y-3"
                      value={field.value as string}
                      onValueChange={handleRoleChange}
                    >
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="contractor" id="role-contractor" />
                        <Label htmlFor="role-contractor">Contractor / Employer</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="unionRep" id="role-unionRep" />
                        <Label htmlFor="role-unionRep">Union Representative</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="trustee" id="role-trustee" />
                        <Label htmlFor="role-trustee">Trustee / Fund Administrator</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="other" id="role-other" />
                        <Label htmlFor="role-other">Other</Label>
                      </div>
                    </RadioGroup>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            {roleRequiresOther && (
              <FormField
                control={form.control}
                name="otherRole"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Please specify <span className="text-red-500">*</span></FormLabel>
                    <FormControl>
                      <Input placeholder="Your role" {...field} value={field.value || ''} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            )}
            
            <FormField
              control={form.control}
              name="reason"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>What brings you to LaborAid?</FormLabel>
                  <FormControl>
                    <Textarea 
                      placeholder="Tell us a bit about your interest in LaborAid" 
                      className="resize-none" 
                      {...field} 
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <div className="flex justify-between pt-4">
              <Button type="button" variant="outline" onClick={() => setStep(1)}>Back</Button>
              <Button type="button" onClick={handleContinue}>Continue</Button>
            </div>
          </div>
        )}
        
        {step === 3 && (
          <div className="space-y-6">
            <h2 className="text-xl font-semibold text-gray-800">Current Process</h2>
            
            <FormField
              control={form.control}
              name="currentMethod"
              render={({ field }) => (
                <FormItem className="space-y-3">
                  <FormLabel>How are you currently handling remittances? <span className="text-red-500">*</span></FormLabel>
                  <FormControl>
                    <RadioGroup 
                      className="space-y-3"
                      value={field.value as string}
                      onValueChange={field.onChange}
                    >
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="manual" id="method-manual" />
                        <Label htmlFor="method-manual">Manual spreadsheets</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="payroll" id="method-payroll" />
                        <Label htmlFor="method-payroll">Payroll system (ADP, QuickBooks, etc.)</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="union" id="method-union" />
                        <Label htmlFor="method-union">Union-provided tools</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="notSure" id="method-notSure" />
                        <Label htmlFor="method-notSure">Not sure / new to the process</Label>
                      </div>
                    </RadioGroup>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <FormField
              control={form.control}
              name="employeeCount"
              render={({ field }) => (
                <FormItem className="space-y-3">
                  <FormLabel>How many employees or members are involved? <span className="text-red-500">*</span></FormLabel>
                  <Select onValueChange={field.onChange} value={field.value}>
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select a range" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="1-10">1-10</SelectItem>
                      <SelectItem value="11-50">11-50</SelectItem>
                      <SelectItem value="51-200">51-200</SelectItem>
                      <SelectItem value="200+">200+</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <FormField
              control={form.control}
              name="agreeToTerms"
              render={({ field }) => (
                <FormItem className="flex flex-row items-start space-x-3 space-y-0 pt-4">
                  <FormControl>
                    <Checkbox 
                      checked={field.value}
                      onCheckedChange={field.onChange}
                    />
                  </FormControl>
                  <div className="space-y-1 leading-none">
                    <FormLabel>
                      I agree to LaborAid's Terms of Service and Privacy Policy
                    </FormLabel>
                    <FormMessage />
                  </div>
                </FormItem>
              )}
            />
            
            <div className="flex justify-between pt-4">
              <Button type="button" variant="outline" onClick={() => setStep(2)}>Back</Button>
              <Button type="submit">Complete Sign Up</Button>
            </div>
          </div>
        )}
      </form>
    </Form>
  );
};

export default SignUpForm;
