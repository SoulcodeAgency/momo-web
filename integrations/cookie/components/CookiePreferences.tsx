"use client";

import { FaCheck, FaTimes } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import { useActionState, useEffect, useState } from "react";
import { Dialog, DialogClose, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Checkbox } from "@/components/ui/checkbox";
import { useCookiePreferences } from "../CookiePreferencesProvider";

const initialFormState: { analytics: "all" | "necessary" | null } = { analytics: null };

function cookieFormAction(currentState: typeof initialFormState, formData: FormData): typeof initialFormState {
    const analytics = formData.get("analytics");
    console.log("analytics", analytics);
    return { ...currentState, analytics: analytics ? "all" : "necessary" };
}

const CookiePreferences = () => {
    const { consent, isCookiePreferencesVisible, setIsCookiePreferencesVisible, handleConsentChange } = useCookiePreferences();
    const [formState, formAction] = useActionState(cookieFormAction, { ...initialFormState, analytics: consent ? consent : null });
    const [checkboxConsentValue, setCheckboxConsentValue] = useState<boolean>(consent === "all");

    useEffect(() => {
        setCheckboxConsentValue(consent === "all");
    }, [consent]);

    useEffect(() => {
        handleConsentChange(formState.analytics);
        setIsCookiePreferencesVisible(false);
    }, [formState.analytics]);

    return (
        <Dialog open={isCookiePreferencesVisible} onOpenChange={(open) => setIsCookiePreferencesVisible(open)}>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>Cookie Preferences</DialogTitle>
                    <DialogDescription>
                        We use cookies to improve your site experience.
                        The &quot;strictly necessary&quot; cookies are
                        required for the website to function.
                    </DialogDescription>
                    <DialogContent>
                        <form action={formAction} className="space-y-8">
                            <h2 className="title-font mb-5 text-lg font-medium text-gray-900 dark:text-white">
                                Cookie Preferences
                            </h2>
                            <div className="dark:text-gray-300">
                                <p className="text-base">
                                    We use cookies to improve your site experience.
                                    The &quot;strictly necessary&quot; cookies are
                                    required for the website to function.
                                </p>

                                <div className="mt-5 divide-y divide-gray-200 rounded-lg border border-gray-200 dark:divide-gray-600 dark:border-gray-600">
                                    <details className="group p-4 [&_summary::-webkit-details-marker]:hidden">
                                        <summary className="flex items-center gap-4 hover:cursor-pointer">
                                            <FaCheck className="text-green-600 dark:text-green-500" />

                                            <h2 className="flex-1 font-medium">
                                                Strictly Necessary Cookies
                                            </h2>

                                            <span className="relative ml-1.5 h-5 w-5 flex-none">
                                                <svg
                                                    className="ml-1.5 h-5 w-5 flex-shrink-0 transition duration-300 group-open:-rotate-180"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    fill="none"
                                                    viewBox="0 0 24 24"
                                                    stroke="currentColor"
                                                >
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        strokeWidth="2"
                                                        d="M19 9l-7 7-7-7"
                                                    />
                                                </svg>
                                            </span>
                                        </summary>

                                        <p className="mt-4 leading-relaxed">
                                            These are the cookies required for
                                            the Website to function.
                                        </p>
                                    </details>

                                    <details
                                        className="group p-4 [&_summary::-webkit-details-marker]:hidden"
                                        open
                                    >
                                        <summary className="flex items-center gap-4 hover:cursor-pointer">
                                            {checkboxConsentValue ? (
                                                <FaCheck className="text-green-600 dark:text-green-500" />
                                            ) : (
                                                <FaTimes className="text-red-600 dark:text-red-500" />
                                            )}

                                            <h2 className="flex-1 font-medium">
                                                Product Analytics / Tracking Cookies
                                            </h2>

                                            <span className="relative ml-1.5 h-5 w-5 flex-none">
                                                <svg
                                                    className="ml-1.5 h-5 w-5 flex-shrink-0 transition duration-300 group-open:-rotate-180"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    fill="none"
                                                    viewBox="0 0 24 24"
                                                    stroke="currentColor"
                                                >
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        strokeWidth="2"
                                                        d="M19 9l-7 7-7-7"
                                                    />
                                                </svg>
                                            </span>
                                        </summary>

                                        <p className="mt-4 leading-relaxed">
                                            We include analytics cookies to
                                            understand how you use our product and
                                            design better experiences.
                                        </p>

                                        <div className="mt-4 flex gap-4">
                                            <div className="flex items-center gap-2">
                                                <Checkbox name="analytics" id="analytics" checked={checkboxConsentValue} onCheckedChange={(checked: boolean) => setCheckboxConsentValue(checked)} />
                                                <label
                                                    htmlFor="terms"
                                                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                                >
                                                    Allow
                                                </label>
                                            </div>
                                        </div>
                                    </details>
                                </div>

                                <div className="mt-8 flex items-center justify-end">
                                    <DialogClose asChild>
                                        <Button type="submit">Save Current Settings</Button>
                                    </DialogClose>
                                </div>
                            </div>
                        </form>
                    </DialogContent>
                </DialogHeader>
            </DialogContent>

        </Dialog>
    );
};

export default CookiePreferences;
