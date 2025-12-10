"use client";

import { useState } from "react";
import { PaymentPlanModal } from "@/components/features/dashboard/PaymentPlanModal";
import { PaymentReminderModal } from "@/components/features/dashboard/PaymentReminderModal";

export function PaymentModalsPreview() {
    const [showPlanModal, setShowPlanModal] = useState(true);
    const [showReminderModal, setShowReminderModal] = useState(true);

    return (
        <>
            <PaymentPlanModal isOpen={showPlanModal} onClose={() => setShowPlanModal(false)} />
            <PaymentReminderModal isOpen={showReminderModal} onClose={() => setShowReminderModal(false)} />
        </>
    );
}
