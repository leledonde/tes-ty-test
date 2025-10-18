import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { SquareUserRound } from 'lucide-react';
import { Button } from "../ui/button";
import Link from "next/link";
import { links } from "@/utils/links";
import { SignedIn,SignedOut,SignInButton,SignOutButton,SignUpButton} from '@clerk/nextjs'

const DropDownListMenu = () => {
  return (
    <div>
        <DropdownMenu>
            <DropdownMenuTrigger>
              <Button variant={"outline"} ><SquareUserRound /></Button>
            </DropdownMenuTrigger>
                <DropdownMenuContent>
                    <DropdownMenuLabel>Username</DropdownMenuLabel>
                    <DropdownMenuSeparator />

                    <SignedOut>
                      <DropdownMenuItem>
                        <SignInButton mode="modal"><button>เข้าสู่ระบบ</button></SignInButton>
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        <SignUpButton mode="modal"><button>สมัคสมาชิก</button></SignUpButton>
                      </DropdownMenuItem>
                    </SignedOut>

                    <SignedIn>
                      {links.map((item, index) => {
                        return (
                          <DropdownMenuItem key={index}>
                            <Link href={item.href}>{item.label}</Link>
                            </DropdownMenuItem>
                        )
                      })}
                    <DropdownMenuSeparator />
                    <DropdownMenuItem>
                    <SignOutButton><button>ออกจากระบบ</button></SignOutButton>
                    </DropdownMenuItem>
                    </SignedIn>

                </DropdownMenuContent>
        </DropdownMenu>
    </div>
  )
}
export default DropDownListMenu