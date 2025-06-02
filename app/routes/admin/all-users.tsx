import {Header} from "../../../components";
import {ColumnDirective, ColumnsDirective, GridComponent} from "@syncfusion/ej2-react-grids";
import {cn, formatDate} from "../../../lib/utils";
import {getAllUsers} from "~/appwrite/auth";
import type {Route} from "./+types/all-users";

export const loader = async () => {
  const {users, total} = await getAllUsers(10, 0);

  return {users, total}
}


const AllUsers = ({loaderData}: Route.ComponentProps) => {
  const {users} = loaderData;

  return (
    <main className="all-users wrapper">
      <Header
        title="Manage Users"
        description="Filter, sort and manage users with ease."
      />

      <GridComponent dataSource={users} gridLines="None">
        <ColumnsDirective>
          <ColumnDirective
            field="name"
            headerText="Name"
            width="200"
            textAlign="Left"
            template={({imageUrl, name}: User) => (
              <div className="flex items-center gap-1.5 px-4">
                <img src={imageUrl} alt="avatar" className="w-10 h-10 rounded-full aspect-square"/>
                <span className="text-sm font-medium">{name}</span>
              </div>
            )}
          />
          <ColumnDirective field="email" headerText="Email" width="200" textAlign="Left"/>
          <ColumnDirective field="joinedAt" headerText="Date Joined" width="140" textAlign="Left"
                           template={({joinedAt}: { joinedAt: string }) => formatDate(joinedAt)}/>
          <ColumnDirective field="status" headerText="Type" width="100" textAlign="Left"
                           template={({status}: { status: string }) => (
                             <article
                               className={cn('status-column', status === 'user' ? 'bg-success-50' : 'bg-light-300')}>
                               <div
                                 className={cn('size-1.5 rounded-full', status === 'user' ? 'bg-success-500' : 'bg-gray-300')}/>
                               <span className="text-xs font-medium text-gray-500">{status}</span>
                             </article>
                           )}/>
        </ColumnsDirective>
      </GridComponent>
    </main>
  )
}
export default AllUsers
