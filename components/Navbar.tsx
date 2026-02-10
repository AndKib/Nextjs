import { NavigationMenu, NavigationMenuList, NavigationMenuItem, NavigationMenuLink } from "./ui/navigation-menu"

function Navbar() {
  return (
    <NavigationMenu className="min-w-screen">
        <NavigationMenuList>
            <NavigationMenuItem>
                <NavigationMenuLink>Login</NavigationMenuLink>
            </NavigationMenuItem>
        </NavigationMenuList>
    </NavigationMenu >  
  )
}

export default Navbar