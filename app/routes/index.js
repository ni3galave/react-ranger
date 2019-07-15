import login from "containers/login";

const test = function(){
  return <div>default</div>
}
const test1 = function(){
  return <div>Audit</div>
}
const user = function(){
  return <div>User</div>
}
export default [
    {
        path: "/",
        key: "dashboard",
        icon: "",
        label: "Dashboard",
        breadcrumb: "Dashboard",
        component: test
    },
    {
        path: "/dashboard",
        key: "dashboard",
        icon: "",
        label: "dashboard",
        breadcrumb: "dashboard",
        component: test
    },{
        path: "/audit",
        key: "audit",
        icon: "",
        label: "audit",
        breadcrumb: "audit",
        component: test1
    },{
        path: "/user",
        key: "user",
        icon: "",
        label: "user",
        breadcrumb: "user",
        component: user
    },{
        path: "/login",
        key: "user",
        icon: "",
        label: "user",
        breadcrumb: "user",
        component: login
    }
];
