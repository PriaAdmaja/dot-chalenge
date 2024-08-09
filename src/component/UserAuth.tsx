import { usePathname, useRouter } from "next/navigation";

const UserAuth = ({ children }: { children: JSX.Element }) => {
  const router = useRouter();
  const pathname = usePathname();

  const user = localStorage.getItem("user");
  const parsedUser = JSON.parse(user as string);

  if (!parsedUser) {
    if (pathname !== "/dashboard") {
      router.push("/");
      return <></>;
    }
  }

  if (parsedUser) {
    if (pathname === "/") {
      router.push("/dashboard");
      return <></>;
    }
  }

  return <>{children}</>;
};

export default UserAuth;
