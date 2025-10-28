import { useState, useEffect, type FormEvent } from "react";
import { Input } from "../../../components/common/input";
import { Button } from "../../../components/common/button";
import type { EmailNotificationFormProps, EmailNotification } from "../../../types";
import { saveEmailNotification, removeEmailNotification } from "../../../utils/local-storage";

export const NotificationForm = ({ notification , onSave, onRemove }: EmailNotificationFormProps) => {
    const [email, setEmail] = useState(notification?.email || '');
    const [thresholdAmount, setThresholdAmount] = useState(notification?.thresholdAmount.toString() || '');

    useEffect(() => {
        if (notification) {
            setEmail(notification.email);
            setThresholdAmount(notification.thresholdAmount.toString());
        }
    }, [notification]);

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        const newNotification: EmailNotification = {
            email,
            thresholdAmount: parseFloat(thresholdAmount),
        };
        saveEmailNotification(newNotification);
        onSave(newNotification);
    };

    const handleRemove = () => {
        removeEmailNotification();
        setEmail('');
        setThresholdAmount('');
        onRemove();
    };

    return (
        <form onSubmit={handleSubmit} className="bg-white p-4 rounded-lg border">
            <h2 className="text-xl font-semibold mb-4">Email Notifications</h2>
            
            {notification ? (
                <div className="mb-4 p-3 bg-green-50 border border-green-200 rounded">
                    <p className="text-sm font-medium text-green-800">
                        ✓ Notification Active
                    </p>
                    <p className="text-xs text-green-600 mt-1">
                        Email: {notification.email}
                    </p>
                    <p className="text-xs text-green-600">
                        Threshold: ${notification.thresholdAmount.toFixed(2)}
                    </p>
                </div>
            ) : (
                <p className="text-sm text-gray-500 mb-4">
                    Get notified when you reach your spending limit
                </p>
            )}

            <div className="mb-4">
                <label className="block mb digestion-2 text-sm font-medium">Email</label>
                <Input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    placeholder="your@email.com"
                />
            </div>

            <div className="mb-4">
                <label className="block mb-2 text-sm font-medium">Threshold Amount ($)</label>
                <Input
                    type="number"
                    value={thresholdAmount}
                    onChange={(e) => setThresholdAmount(e.target.value)}
                    required
                    min="0.01"
                    step="0.01"
                    placeholder="100.00"
                />
            </div>

            <div className="flex gap-2">
                <Button type="submit">
                    {notification ? 'Update Notification' : 'Set Notification'}
                </Button>
                {notification && (
                    <Button type="button" variant="danger" onClick={handleRemove}>
                        Remove
                    </Button>
                )}
            </div>
        </form>
    );
};