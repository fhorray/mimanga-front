import { Header } from "@/components/globals/header";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const LoginPage = () => {
  return (
    <div className="h-screen">
      <Header />

      {/* LOGIN FORM */}
      <div className="h-full">
        <form className="flex items-center justify-center h-full  flex-col">
          {/* EMAIL INPUT */}
          <div>
            <Label htmlFor="email">Email</Label>
            <Input type="email" required />
          </div>

          {/* PASSWORD INPUT */}
          <div>
            <Label htmlFor="email">Email</Label>
            <Input type="password" required />
          </div>
          <Button type="submit">Login</Button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
