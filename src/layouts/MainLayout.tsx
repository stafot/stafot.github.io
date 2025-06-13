// src/layouts/MainLayout.tsx
import { Outlet } from "react-router-dom";
import Header from "@/components/Header";

export default function MainLayout() {
    return (
        <>
            <Header />
            {/* push content below the fixed‐height header if needed */}
            <div className="mt-4">
                <Outlet />
            </div>
        </>
    );
}
