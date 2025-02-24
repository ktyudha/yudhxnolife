import { HelmetProvider } from "react-helmet-async";
import { Outlet } from "react-router-dom";
import Metadata from "@components/Metadata";

import { AppSidebar } from "@/components/ui/app-sidebar";
// import {
//   Breadcrumb,
//   BreadcrumbItem,
//   BreadcrumbLink,
//   BreadcrumbList,
//   BreadcrumbPage,
//   BreadcrumbSeparator,
// } from "@/components/ui/breadcrumb";
import { Separator } from "@/components/ui/separator";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";

import BreadCrumb from "@components/Breadcrumb";
import { data } from "./sidebar-menu.constant";

export default function DefaultLayout() {
  return (
    <>
      <HelmetProvider>
        <Metadata />

        <SidebarProvider>
          <AppSidebar />
          <SidebarInset>
            <header className="flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12">
              <div className="flex items-center gap-2 px-4">
                <SidebarTrigger className="-ml-1" />
                <Separator orientation="vertical" className="mr-2 h-4" />
                <BreadCrumb breadcrumbs={data.navMain} />
              </div>
            </header>

            <main>
              <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
                <Outlet />
              </div>
            </main>
          </SidebarInset>
        </SidebarProvider>
      </HelmetProvider>
    </>
  );
}
