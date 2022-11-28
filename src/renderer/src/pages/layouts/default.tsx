import { Header } from "../../components/Header";
import { Sidebar } from "../../components/Sidebar";
import {Outlet} from 'react-router-dom';
import * as Collapsible from '@radix-ui/react-collapsible';
import { useState } from "react";

export default function Default() {
   const [isSideBarOpen, setIsSideBarOpen] = useState(true);
   return (
     <Collapsible.Root defaultOpen onOpenChange={setIsSideBarOpen} className="h-screen w-screen text-rotion-100 flex">
       <Sidebar />
       <div className="flex-1 flex flex-col max-h-screen">
         <Header isSideBarOpen={isSideBarOpen}/>
         <Outlet/>
       </div>
     </Collapsible.Root >
   );
 }
 