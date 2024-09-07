const DUMMY_ID = '1'
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
    name: 'E-Commerce',
    href: '#',
    icon: <PiShoppingCart />,
    dropdownItems: [
      {
        name: 'Students',
        href: routes.dashboard.students,
      },
      {
        name: 'Product Details',
        href: '',
      },
      {
        name: 'Create Product',
        href: '',
      },
      {
        name: 'Edit Product',
        href: '',
      },
      {
        name: 'Categories',
        href: '',
      },
      {
        name: 'Create Category',
        href: '',
      },
      {
        name: 'Edit Category',
        href: '',
      },
    ],
  },
];
