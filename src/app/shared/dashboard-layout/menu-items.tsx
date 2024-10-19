import { routes } from '@/config/routes';
import { FaHome } from "react-icons/fa";
import {
  PiShoppingCart
} from 'react-icons/pi';

export const menuItems = [
  {
    name: 'Dashboard',
    href: routes.dashboard.index,
    icon: <FaHome />,
  },
  {
    name: 'Courses',
    href: routes.dashboard.courses,
    icon: <PiShoppingCart />,
  },
  {
    name: 'Students',
    href: routes.dashboard.students,
    icon: <PiShoppingCart />,
  },
  {
    name: 'Registration',
    href: 'aabbcc',
    icon: <PiShoppingCart />,
  },
  {
    name: 'Admission',
    href: 'aabbcc',
    icon: <PiShoppingCart />,
  },
  {
    name: 'Seminar',
    href: 'aabbcc',
    icon: <PiShoppingCart />,
  },
];
