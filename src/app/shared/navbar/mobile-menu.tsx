// import React, { useState } from 'react';
// import { RiMenu3Fill } from "react-icons/ri";
// import ThemeSwitcher from './theme-switcher';
// import navItems from '@/data/nav-items';
// import { usePathname } from 'next/navigation';

// const MobileMenu = () => {
//     const [navOpen, setNavOpen] = useState(false)
//     const pathname = usePathname();

//     return (
//         <div className="block xl:hidden relative">
//             <div className='flex gap-2'>
//                 <ThemeSwitcher />
//                 <RiMenu3Fill className='text-2xl' onClick={() => setNavOpen(!navOpen)} />

//                 {navOpen && (
//                     <div className='absolute bg-card w-full left-0 top-10'>
//                         {navItems.map((item, index) => (
//                             <p key={item.name + index}>
//                                 {item.name}
//                             </p>
//                         ))}
//                     </div>
//                 )}



//                 <Drawer>
//                     <DrawerTrigger asChild>
//                         <Button variant="outline">Open Drawer</Button>
//                     </DrawerTrigger>
//                     <DrawerContent>
//                         <div className="mx-auto w-full max-w-sm">
//                             <DrawerHeader>
//                                 <DrawerTitle>Move Goal</DrawerTitle>
//                                 <DrawerDescription>Set your daily activity goal.</DrawerDescription>
//                             </DrawerHeader>
//                             <div className="p-4 pb-0">
//                                 <div className="flex items-center justify-center space-x-2">
//                                     <Button
//                                         variant="outline"
//                                         size="icon"
//                                         className="h-8 w-8 shrink-0 rounded-full"
//                                         onClick={() => onClick(-10)}
//                                         disabled={goal <= 200}
//                                     >
//                                         <Minus className="h-4 w-4" />
//                                         <span className="sr-only">Decrease</span>
//                                     </Button>
//                                     <div className="flex-1 text-center">
//                                         <div className="text-7xl font-bold tracking-tighter">
//                                             {goal}
//                                         </div>
//                                         <div className="text-[0.70rem] uppercase text-muted-foreground">
//                                             Calories/day
//                                         </div>
//                                     </div>
//                                     <Button
//                                         variant="outline"
//                                         size="icon"
//                                         className="h-8 w-8 shrink-0 rounded-full"
//                                         onClick={() => onClick(10)}
//                                         disabled={goal >= 400}
//                                     >
//                                         <Plus className="h-4 w-4" />
//                                         <span className="sr-only">Increase</span>
//                                     </Button>
//                                 </div>
//                                 <div className="mt-3 h-[120px]">
//                                     <ResponsiveContainer width="100%" height="100%">
//                                         <BarChart data={data}>
//                                             <Bar
//                                                 dataKey="goal"
//                                                 style={
//                                                     {
//                                                         fill: "hsl(var(--foreground))",
//                                                         opacity: 0.9,
//                                                     } as React.CSSProperties
//                                                 }
//                                             />
//                                         </BarChart>
//                                     </ResponsiveContainer>
//                                 </div>
//                             </div>

//                         </div>
//                     </DrawerContent>
//                 </Drawer>

//             </div>
//         </div>
//     );
// };

// export default MobileMenu;



// {/* <Link href="/free-seminar">
// <PrimaryButton className="px-4 h-[40px]">ফ্রি সেমিনার</PrimaryButton>
// </Link> */}