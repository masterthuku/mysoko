import AdminLayout from "@/components/admin/AdminLayout";

export const metadata = {
    title: "mySoko. - Admin",
    description: "mySoko. - Admin",
};

export default function RootAdminLayout({ children }) {

    return (
        <>
            <AdminLayout>
                {children}
            </AdminLayout>
        </>
    );
}
