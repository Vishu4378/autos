"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";

import { LayoutDashboard, Workflow, Settings, User } from "lucide-react";

const routes = [
  { label: "Dashboard", href: "/dashboard", icon: LayoutDashboard },
  { label: "Workflow", href: "/workflow", icon: Workflow },
  { label: "Settings", href: "/settings", icon: Settings },
  { label: "Profile", href: "/profile", icon: User },
];

export function WorkflowSidebar() {
  const pathname = usePathname();

  return (
    <Sidebar variant="inset" collapsible="offcanvas" className="shadow-sm">
      <SidebarHeader />
      <SidebarContent>
        <SidebarGroup>
          {/* <SidebarMenu>
            {routes.map((item, i) => {
              const Icon = item.icon;
              const active = pathname.startsWith(item.href);

              return (
                <motion.div
                  key={item.href}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05, duration: 0.2 }}
                >
                  <SidebarMenuItem>
                    <SidebarMenuButton asChild isActive={active}>
                      <Link href={item.href}>
                        <motion.div
                          className={`flex items-center gap-2 p-2 rounded-lg`}
                          whileHover={{ scale: 1.03 }}
                          transition={{ type: "spring", stiffness: 300 }}
                        >
                          <motion.div
                            whileHover={{ scale: 1.15 }}
                            transition={{ type: "spring", stiffness: 250 }}
                          >
                            <Icon className="w-4 h-4" />
                          </motion.div>

                          <motion.span
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.1 }}
                          >
                            {item.label}
                          </motion.span>
                        </motion.div>
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                </motion.div>
              );
            })}
          </SidebarMenu> */}
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter />
    </Sidebar>
  );
}
