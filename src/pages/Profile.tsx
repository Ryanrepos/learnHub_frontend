import { useState, useEffect } from "react";
import { useGetMe, useUpdateProfile } from "../composables/useLogin";
import { StyledProfile } from "./Profile.ts";

export default function Profile() {
    const { data } = useGetMe();
    const user = data?.data;
    const { mutate: updateProfile, isPending } = useUpdateProfile();

    const [form, setForm] = useState({
        firstName: "",
        lastName: "",
        email: "",
    });

    useEffect(() => {
        if (user) {
            setForm({
                firstName: user.firstName || "",
                lastName: user.lastName || "",
                email: user.email || "",
            });
        }
    }, [user]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = () => {
        updateProfile(form);
    };

    return (
        <StyledProfile>
            <h2 className="page-title">Profile Settings</h2>

            <div className="section">
                <h3 className="section-title">Contact Information</h3>

                <div className="form-row">
                    <input
                        className="form-input"
                        type="text"
                        name="firstName"
                        placeholder="First name"
                        value={form.firstName}
                        onChange={handleChange}
                    />
                    <input
                        className="form-input"
                        type="text"
                        name="lastName"
                        placeholder="Last name"
                        value={form.lastName}
                        onChange={handleChange}
                    />
                </div>

                <div className="form-row">
                    <input
                        className="form-input full"
                        type="email"
                        name="email"
                        placeholder="Email"
                        value={form.email}
                        onChange={handleChange}
                    />
                </div>

                <div className="form-actions">
                    <button
                        className="save-btn"
                        onClick={handleSubmit}
                        disabled={isPending}
                    >
                        {isPending ? "Saving..." : "Save Changes"}
                    </button>
                </div>
            </div>
        </StyledProfile>
    );
}