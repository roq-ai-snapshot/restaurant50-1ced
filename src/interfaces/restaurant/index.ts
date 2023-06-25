import { MenuItemInterface } from 'interfaces/menu-item';
import { OrderInterface } from 'interfaces/order';
import { TableAssignmentInterface } from 'interfaces/table-assignment';
import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface RestaurantInterface {
  id?: string;
  description?: string;
  image?: string;
  name: string;
  created_at?: any;
  updated_at?: any;
  user_id: string;
  tenant_id: string;
  menu_item?: MenuItemInterface[];
  order?: OrderInterface[];
  table_assignment?: TableAssignmentInterface[];
  user?: UserInterface;
  _count?: {
    menu_item?: number;
    order?: number;
    table_assignment?: number;
  };
}

export interface RestaurantGetQueryInterface extends GetQueryInterface {
  id?: string;
  description?: string;
  image?: string;
  name?: string;
  user_id?: string;
  tenant_id?: string;
}
