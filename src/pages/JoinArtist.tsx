import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { toast } from "sonner";

const artistSchema = z.object({
  fullName: z.string().min(2, "Full name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  password: z.string().min(8, "Password must be at least 8 characters"),
  confirmPassword: z.string(),
  artistName: z.string().min(2, "Artist name must be at least 2 characters"),
  bio: z.string().min(50, "Bio must be at least 50 characters"),
  experience: z.string().min(1, "Please select your experience level"),
  portfolio: z.string().url("Please enter a valid portfolio URL").optional().or(z.literal("")),
  phone: z.string().min(10, "Please enter a valid phone number"),
}).refine((data) => data.password === data.confirmPassword, {
  message: "Passwords don't match",
  path: ["confirmPassword"],
});

type ArtistForm = z.infer<typeof artistSchema>;

const JoinArtist = () => {
  const form = useForm<ArtistForm>({
    resolver: zodResolver(artistSchema),
    defaultValues: {
      fullName: "",
      email: "",
      password: "",
      confirmPassword: "",
      artistName: "",
      bio: "",
      experience: "",
      portfolio: "",
      phone: "",
    },
  });

  const onSubmit = (data: ArtistForm) => {
    // Client-side validation complete
    console.log("Artist registration attempt:", data);
    toast.success("Artist application validated successfully!");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-art-cream via-background to-art-sage py-8 px-4">
      <div className="max-w-2xl mx-auto">
        <Card className="border-art-sage/20 shadow-xl">
          <CardHeader className="space-y-2 text-center">
            <div className="flex justify-center mb-4">
              <div className="w-12 h-12 bg-gradient-to-r from-art-gold to-art-gold-light rounded-full"></div>
            </div>
            <CardTitle className="text-3xl font-bold bg-gradient-to-r from-art-gold to-art-burgundy bg-clip-text text-transparent">
              Join as Artist
            </CardTitle>
            <CardDescription className="text-muted-foreground">
              Showcase your art to collectors worldwide
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <FormField
                    control={form.control}
                    name="fullName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Full Name</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Your legal name"
                            className="border-art-sage/30 focus:border-art-gold"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="artistName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Artist Name</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Your artist/stage name"
                            className="border-art-sage/30 focus:border-art-gold"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email</FormLabel>
                        <FormControl>
                          <Input
                            type="email"
                            placeholder="your@email.com"
                            className="border-art-sage/30 focus:border-art-gold"
                            {...field}
                          />
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
                        <FormLabel>Phone Number</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="+1 (555) 123-4567"
                            className="border-art-sage/30 focus:border-art-gold"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <FormField
                    control={form.control}
                    name="password"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Password</FormLabel>
                        <FormControl>
                          <Input
                            type="password"
                            placeholder="Create a strong password"
                            className="border-art-sage/30 focus:border-art-gold"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="confirmPassword"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Confirm Password</FormLabel>
                        <FormControl>
                          <Input
                            type="password"
                            placeholder="Confirm your password"
                            className="border-art-sage/30 focus:border-art-gold"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <FormField
                  control={form.control}
                  name="bio"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Artist Bio</FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="Tell us about your artistic journey, style, and inspiration..."
                          className="min-h-[100px] border-art-sage/30 focus:border-art-gold"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <FormField
                    control={form.control}
                    name="experience"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Experience Level</FormLabel>
                        <FormControl>
                          <select
                            className="flex h-10 w-full rounded-md border border-art-sage/30 bg-background px-3 py-2 text-sm focus:border-art-gold focus:outline-none"
                            {...field}
                          >
                            <option value="">Select experience</option>
                            <option value="beginner">Beginner (0-2 years)</option>
                            <option value="intermediate">Intermediate (2-5 years)</option>
                            <option value="advanced">Advanced (5-10 years)</option>
                            <option value="professional">Professional (10+ years)</option>
                          </select>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="portfolio"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Portfolio URL (Optional)</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="https://yourportfolio.com"
                            className="border-art-sage/30 focus:border-art-gold"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-gradient-to-r from-art-gold to-art-gold-light hover:from-art-gold-light hover:to-art-gold text-art-navy font-semibold py-3"
                >
                  Submit Artist Application
                </Button>
              </form>
            </Form>
            
            <div className="mt-6 text-center space-y-2">
              <p className="text-sm text-muted-foreground">
                Already have an account?{" "}
                <Link to="/login" className="text-art-gold hover:text-art-gold-light font-medium">
                  Sign in
                </Link>
              </p>
              <p className="text-sm text-muted-foreground">
                Just want to collect art?{" "}
                <Link to="/signup" className="text-art-gold hover:text-art-gold-light font-medium">
                  Join as Collector
                </Link>
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default JoinArtist;