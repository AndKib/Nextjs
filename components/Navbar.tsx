"use client";
import { Moon, Sun } from "lucide-react";
import Link from "next/link";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "./ui/navigation-menu";
import { ThemeModeButton } from "./ThemeModeButton";
import { signOut , useSession } from "@/lib/auth-client";

function Navbar() {
  const session = useSession();

  return (
    <NavigationMenu className="min-w-screen">
      <NavigationMenuList>
        {!session.data?.user ? (
          <>
            <NavigationMenuItem>
              <NavigationMenuLink >
                <Link href="/login">Login</Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink>
                <Link href="/register">Register</Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
          </>
        ) : (
          <NavigationMenuItem>
            <NavigationMenuLink
              onClick={() => {
                signOut();
                window.location.href = "/";
              }}
            >
              <button>log out</button>
            </NavigationMenuLink>
          </NavigationMenuItem>
        )}
        <NavigationMenuItem>
          <NavigationMenuLink>
            <Link href="/Home">Home</Link>
          </NavigationMenuLink>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuLink>
            <Link href="/dashboard">Dashboard</Link>
          </NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink>
            <Link href={`/profile/ ${session.data?.user.username}`}>
              {" "}
              {session.data?.user.username}
            </Link>
          </NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink>
            {session.data?.user.role === "ADMIN" && (
              <NavigationMenuItem>
                <NavigationMenuLink>
                  <Link href="/dashboard">admin</Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
            )}
          </NavigationMenuLink>
          <ThemeModeButton />
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}

export default Navbar;
