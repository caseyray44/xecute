import { Metadata } from "next";
import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { ProfileSummaryCard } from "@/components/features/dashboard/ProfileSummaryCard";
import { PhoneNumberTable } from "@/components/features/dashboard/PhoneNumberTable";
import { ActivityPanel } from "@/components/features/dashboard/ActivityPanel";
import { OnboardingChecklist } from "@/components/features/dashboard/OnboardingChecklist";
import { ConnectMarkateCard } from "@/components/features/dashboard/ConnectMarkateCard";

export const metadata: Metadata = {
    title: "Dashboard",
    description: "Manage your account, phone numbers, and activity.",
};

export default function DashboardPage() {
    return (
        <DashboardLayout>
            <div className="space-y-6 animate-fade-in">
                {/* Header Section */}
                <div className="flex flex-col gap-1">
                    <h1 className="text-3xl font-bold tracking-tight">Account & Subscription</h1>
                    <p className="text-muted-foreground">Manage your profile, team numbers, and view system activity.</p>
                </div>

                {/* Top Row: Connect Markate (Full Width if needed, or part of grid) */}
                <div className="grid grid-cols-1 gap-6">
                    <ConnectMarkateCard />
                </div>

                {/* Account & Onboarding */}
                <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
                    <div className="xl:col-span-2">
                        <ProfileSummaryCard />
                    </div>
                    <div className="xl:col-span-1">
                        <OnboardingChecklist />
                    </div>
                </div>

                {/* Bottom Row: Phone Numbers + Activity */}
                <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
                    <div className="xl:col-span-2">
                        <PhoneNumberTable />
                    </div>
                    <div className="xl:col-span-1">
                        <ActivityPanel />
                    </div>
                </div>
            </div>
        </DashboardLayout>
    );
}
