import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { LogoutLink } from '@kinde-oss/kinde-auth-nextjs/components';
import Link from 'next/link';

interface iAppProps {
  email: string;
  name: string;
  userImage: string | undefined;
}

export function UserNav({ email, name, userImage }: iAppProps) {
  // Helper function to check if the image URL is valid
  const isValidImage = (url: string | undefined) => {
    if (!url) return false;
    // Check for Gravatar's blank image or any invalid cases
    return !url.includes('gravatar.com/avatar') || !url.includes('d=blank');
  };
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="relative h-10 w-10 rounded-full">
          <Avatar className="h-10 w-10">
            {isValidImage(userImage) ? (
              <AvatarImage src={userImage} alt="User Image" />
            ) : (
              <AvatarFallback style={{ color: 'black' }}>
                {name.slice(0, 3)}
              </AvatarFallback>
            )}
          </Avatar>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56" align="end" forceMount>
        <DropdownMenuLabel className="font-normal">
          <div className="flex flex-col space-y-1">
            <p className="text-sm font-medium leading-none">{name}</p>
            <p className="text-xs leading-none text-muted-foreground">
              fredrik@test.no
            </p>
          </div>
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem asChild>
            <Link href="/sell">Ny annonse</Link>
          </DropdownMenuItem>
          <DropdownMenuItem asChild>
            <Link href="/settings">Profil</Link>
          </DropdownMenuItem>
          <DropdownMenuItem asChild>
            <Link href="my-products">Mine annonser</Link>
          </DropdownMenuItem>
          <DropdownMenuItem asChild>
            <Link href="/billing">Betalinger</Link>
          </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuItem asChild>
          <LogoutLink>Logg ut</LogoutLink>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
