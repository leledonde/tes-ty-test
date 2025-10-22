"use client";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { SquareUserRound } from "lucide-react";
import { Button } from "../ui/button";
import Link from "next/link";
import { useUser, UserButton } from "@clerk/nextjs";

const DropDownListMenu = () => {
  const { isSignedIn, user, isLoaded } = useUser();

  if (!isLoaded) return null;

  return (
    <div>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant={"outline"} className="flex items-center gap-2">
            <SquareUserRound />
            {isSignedIn && user ? (
              <span>
                Hello, {user.firstName} {user.lastName}
              </span>
            ) : (
              <span>บัญชีผู้ใช้</span>
            )}
          </Button>
        </DropdownMenuTrigger>

        <DropdownMenuContent align="end" className="w-48">
          {isSignedIn && user ? (
            <>
              <DropdownMenuLabel>
                👋 {user.firstName} {user.lastName}
              </DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <UserButton afterSignOutUrl="/" />
              </DropdownMenuItem>
            </>
          ) : (
            <>
              <DropdownMenuItem>
                <Link
                  href="/signup"
                  className="text-gray-700 hover:text-sky-500 transition w-full text-left"
                >
                  สมัครสมาชิก
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link
                  href="/signin"
                  className="text-gray-700 hover:text-sky-500 transition w-full text-left"
                >
                  เข้าสู่ระบบ
                </Link>
              </DropdownMenuItem>
            </>
          )}
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default DropDownListMenu;
