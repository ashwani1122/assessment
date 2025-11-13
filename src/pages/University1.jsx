import React, { useState } from "react";
import FeeModal from "../components/FeeModal";
import CTAButtons from "../components/CTAButton";

export default function University1() {
    const [showModal, setShowModal] = useState(false);

    return (
        <div className="px-4 sm:px-6 md:px-10 lg:px-16 py-12 max-w-6xl mx-auto text-center flex flex-col items-center justify-center min-h-[80vh]">
        <h1
            id="apply"
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold text-white leading-snug md:leading-tight"
        >
            Go beyond the classroom
            Gain the skills the world is waiting for.
        </h1>
        <div className="mt-10 w-full flex justify-center">
            <CTAButtons />
        </div>
        <FeeModal
            open={showModal}
            onClose={() => setShowModal(false)}
            apiUrl="backend"
        />
        </div>
    );
}
