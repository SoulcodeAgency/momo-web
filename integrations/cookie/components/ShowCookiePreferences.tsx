import { BiCookie } from "react-icons/bi";
import { useCookiePreferences } from "../CookiePreferencesProvider";

const ShowCookiePreferences = () => {
    const { setIsCookiePreferencesVisible } = useCookiePreferences();

    return (
        <div className="md:absolute flex justify-center md:mt-[-50px] left-0 right-0">
            <span
                className="group flex cursor-pointer items-center gap-x-3 rounded-md p-2 text-sm leading-6 text-gray-900 hover:bg-primary hover:text-white dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-white"
                onClick={(e) => {
                    e.preventDefault();
                    setIsCookiePreferencesVisible(true);
                }}
            >
                <BiCookie className="h-5 w-5 shrink-0" aria-hidden="true" />
                <span className="truncate">Cookie Preferences</span>
            </span>
        </div>
    );
};

export default ShowCookiePreferences;
