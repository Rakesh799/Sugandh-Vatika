import Link from "next/link";
import React from "react";
export default function GymSection() {
    const data = [
        { day: "Monday", workout: "Shoulder Abs" },
        { day: "Tuesday", workout: "Leg" },
        { day: "Wednesday", workout: "Back Abs" },
        { day: "Thursday", workout: "Leg" },
        { day: "Friday", workout: "Chest Tricep" },
        { day: "Saturday", workout: "Back Bicep Abs" },
    ];
    return (
        <>
            <div className="grid grid-cols-2 border border-brown rounded-lg overflow-hidden text-sm font-medium w-80 mx-auto my-[30px]">
                {/* Header */}
                <div className="bg-brown text-beige font-semibold p-2">Day</div>
                <div className="bg-brown text-beige font-semibold p-2">Workout</div>

                {/* Rows */}
                {data.map((item, i) => (
                    <React.Fragment key={i}>
                        <div className="p-2 border-t border-brown">{item.day}</div>
                        <div className="p-2 border-t border-brown">{item.workout}</div>
                    </React.Fragment>
                ))}
            </div>
            <Link href={'/songs'} className="flex justify-center cursor-pointer font-bold">
                Go to Songs Page
            </Link>
        </>
    )
}

