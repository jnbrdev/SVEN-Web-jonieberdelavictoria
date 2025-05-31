import { CustomFooter } from "@/Components/Custom/CustomFooter";
import { CustomNavbar } from "@/Components/Custom/CustomNavbar";
import { Head, Link } from "@inertiajs/react";
import React, { useState, useRef } from "react";
import { Card } from "@material-tailwind/react";
import { useForm } from "@inertiajs/react";

import BackgroundImage from "../images/background-img.jpg";
import imageOne from "../images/birdy.png";
import imagetwo from "../images/cat.png";
import imageThree from "../images/dogo.png";
import imageFour from "../images/hamster.jpg";
import imageFive from "../images/dog_schedule.jpg";
import logoSchedule from "../images/logo-schedule.png";

export default function Welcome({ auth }) {
    const [frequency, setFrequency] = useState("Recurring");
    const [startDate, setStartDate] = useState("");
    const [timeOfDay, setTimeOfDay] = useState("Morning");
    const [notes, setNotes] = useState("");
    const scheduleRef = useRef(null);
    const scrollToSchedule = () => {
        scheduleRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    const toggleDay = (day) => {
        const updatedDays = data.days.includes(day)
            ? data.days.filter((d) => d !== day)
            : [...data.days, day];
        setData("days", updatedDays);
    };

    const { data, setData, post, processing, errors, reset } = useForm({
        frequency: frequency,
        start_date: startDate,
        days: [],
        time_of_day: timeOfDay,
        notes: notes,
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        post(route("schedule.store"), {
            onSuccess: () => {
                alert("Appointment successfully scheduled!");
                reset(); // optional
            },
        });
    };
    return (
        <div className="overflow-x-hidden">
            <Head title="Welcome" />
            <CustomNavbar />

            <div
                id="hero"
                className="relative w-full flex flex-col md:flex-row gap-6 px-3 lg:px-[0] pt-[100px] bg-cover bg-center"
                style={{
                    backgroundImage: `url(${BackgroundImage})`,
                    height: "80vh",
                    backgroundSize: "cover",
                }}
            >
                <div className="hidden md:block w-full md:w-3/5 h-full"></div>

                <div className="w-full md:w-3/5 h-full flex flex-col justify-center text-white pl-[50px] md:pl-[150px]">
                    <h2 className="font-bold text-[28px] md:text-[54px] leading-[34px] md:leading-[64px]">
                        We care for
                        <br />
                        your furry little
                        <br />
                        loved ones
                        <br />
                        while
                    </h2>
                    <button
                        onClick={scrollToSchedule}
                        className="button-two mt-6 rounded-2xl bg-white px-6 py-2 text-[20px] md:text-[20px] font-light"
                        style={{
                            color: "#545871",
                            maxWidth: "220px",
                            borderRadius: "50px",
                        }}
                    >
                        Schedule a Visit
                    </button>
                </div>
            </div>

            <div
                id="about"
                className="w-full flex flex-col md:flex-row gap-6 px-3 lg:px-[50px] py-[100px]"
                style={{
                    minHeight: "80vh",
                }}
            >
                <div className="w-full md:w-1/2 flex flex-col justify-center p-8">
                    <h3 className="text-5xl font-bold mb-5">
                        Expert care for your furry, feathery, or scaley friend
                    </h3>
                    <span className="text-lg">
                        We know how stressful it is to leave your pets at home
                        alone. We’re a team of experienced animal caregivers,
                        well connected to local veterinarians. Trust to us to
                        love them like our own, and to keep them safe and happy
                        till you’re home.
                    </span>
                    <button
                        onClick={scrollToSchedule}
                        className="button-two mt-6 rounded-2xl px-6 py-2 text-[20px] md:text-[20px] font-light"
                        style={{
                            color: "white",
                            backgroundColor: "#545871",
                            maxWidth: "220px",
                            borderRadius: "50px",
                        }}
                    >
                        Schedule a Visit
                    </button>
                </div>

                {/* Right side - 50% with 2x2 image grid */}
                <div className="w-full md:w-1/2 grid grid-cols-1 md:grid-cols-2 gap-4 p-4">
                    <div className="bg-gray-200 rounded-lg h-64 overflow-hidden flex items-center justify-center">
                        <img
                            src={imageOne}
                            alt="Bird"
                            className="object-cover w-full h-full"
                        />
                    </div>
                    <div className="bg-gray-200 rounded-lg h-64 overflow-hidden flex items-center justify-center">
                        <img
                            src={imagetwo}
                            alt="Cat"
                            className="object-cover w-full h-full"
                        />
                    </div>
                    <div className="bg-gray-200 rounded-lg h-64 overflow-hidden flex items-center justify-center">
                        <img
                            src={imageThree}
                            alt="Dog"
                            className="object-cover w-full h-full"
                        />
                    </div>
                    <div className="bg-gray-200 rounded-lg h-64 overflow-hidden flex items-center justify-center">
                        <img
                            src={imageFour}
                            alt="Hamster"
                            className="object-cover w-full h-full"
                        />
                    </div>
                </div>
            </div>

            {/* Content Two - 30/70 split */}
            <div
                id="schedule"
                ref={scheduleRef}
                className="w-full flex flex-col md:flex-row px-3 lg:px-[50px] py-[0] bg-gray-100 px-12"
            >
                <div
                    className="w-full md:w-[30%] flex flex-col pt-8 text-white"
                    style={{
                        backgroundImage: `url(${imageFive})`,
                        backgroundSize: "cover",
                        paddingLeft: "0px",
                        paddingRight: "0px",
                    }}
                >
                    <div className="flex items-center px-8 py-8 mb-4">
                        <img
                            src={logoSchedule}
                            alt="Logo"
                            className="w-20 h-20"
                        />
                        <h4 className="text-2xl mr-4">PAWTASTIC</h4>
                    </div>
                    <h4 className="text-xl font-semibold px-8">
                        All services include:
                    </h4>
                    <ul className="list-disc text-lg px-12 py-2 space-y-5">
                        <li>
                            A photo update for you along with chat about the
                            service
                        </li>
                        <li>
                            Notifications of sitter arrival and departure times
                        </li>
                        <li>
                            Treats for your pet, with your permission of course
                        </li>
                    </ul>
                </div>
                <form
                    onSubmit={handleSubmit}
                    className="w-full md:w-[70%] p-8 flex items-center"
                    style={{ backgroundColor: "#F7ECEB" }}
                >
                    <div className="w-full max-w-2xl mx-auto">
                        <h1
                            className="text-4xl font-bold mb-8 pt-8"
                            style={{ color: "#545871" }}
                        >
                            We'll take your dog for walk. Just tell us when!
                        </h1>

                        {/* Frequency and Start Date Row */}
                        <div className="flex flex-col md:flex-row gap-6 mb-8">
                            {/* Frequency Select */}
                            <div className="flex-1">
                                <label className="block text-sm font-medium mb-2">
                                    Frequency
                                </label>
                                <div className="flex border rounded-lg overflow-hidden">
                                    <button
                                        type="button"
                                        className={`flex-1 py-2 px-4 ${
                                            data.frequency === "Recurring"
                                                ? "bg-[#545871] text-white"
                                                : "bg-white"
                                        }`}
                                        onClick={() =>
                                            setData("frequency", "Recurring")
                                        }
                                    >
                                        Recurring
                                    </button>
                                    <button
                                        type="button"
                                        className={`flex-1 py-2 px-4 ${
                                            data.frequency === "One Time"
                                                ? "bg-[#545871] text-white"
                                                : "bg-white"
                                        }`}
                                        onClick={() =>
                                            setData("frequency", "One Time")
                                        }
                                    >
                                        One Time
                                    </button>
                                </div>
                            </div>

                            {/* Start Date */}
                            <div className="flex-1">
                                <label className="block text-sm font-medium mb-2">
                                    Start Date
                                </label>
                                <input
                                    type="date"
                                    className="w-full p-2 border rounded-lg"
                                    value={data.start_date}
                                    onChange={(e) =>
                                        setData("start_date", e.target.value)
                                    }
                                />
                            </div>
                        </div>

                        {/* Days Selection */}
                       <div className="mb-8">
    <label className="block text-sm font-medium mb-2">Days</label>
    <div className="flex flex-wrap gap-2">
        {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"].map((day) => (
            <button
                type="button"
                key={day}
                className={`py-2 px-4 rounded-lg ${
                    data.days.includes(day)
                        ? "bg-[#545871] text-white"
                        : "bg-white"
                }`}
                onClick={() => toggleDay(day)}
            >
                {day}
            </button>
        ))}
    </div>
</div>

                        {/* Time Selection */}
<div className="mb-8">
    <label className="block text-sm font-medium mb-2">Time</label>
    <div className="flex border rounded-lg overflow-hidden">
        {["Morning", "Afternoon", "Evening"].map((time) => (
            <button
                type="button"
                key={time}
                className={`flex-1 py-2 px-4 ${
                    data.time_of_day === time
                        ? "bg-[#545871] text-white"
                        : "bg-white"
                }`}
                onClick={() => setData("time_of_day", time)}
            >
                {time}
            </button>
        ))}
    </div>
</div>

{/* Notes Section */}
<div className="mb-8">
    <label className="block text-sm font-medium mb-2">Additional Notes</label>
    <textarea
        className="w-full p-2 border rounded-lg"
        rows="4"
        value={data.notes}
        onChange={(e) => setData("notes", e.target.value)}
        placeholder="Anything we should know about your pet or schedule?"
    />
</div>

{/* Submit Button */}
<div className="text-center">
    <button
        type="submit"
        disabled={processing}
        className="bg-[#545871] text-white px-6 py-2 rounded-full hover:bg-[#44455f] transition"
    >
        {processing ? "Scheduling..." : "Schedule Now"}
    </button>
</div>
                    </div>
                </form>
            </div>

            <div className="container-fluid mx-auto p-5">
                <CustomFooter />
            </div>
        </div>
    );
}
