import StoreLayout from "@/components/store/StoreLayout";

export const metadata = {
    title: "mySoko. - Store Dashboard",
    description: "mySoko. - Store Dashboard",
};

export default function RootAdminLayout({ children }) {

    return (
        <>
            <StoreLayout>
                {children}
            </StoreLayout>
        </>
    );
}
