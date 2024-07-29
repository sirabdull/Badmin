import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { useState } from "react";
import styles from '../../css/plan.module.css';
import Plugin from "@/Components/Plugin";

export default function Plan({ auth, plans: initialPlans, plugins: initialPlugins }) {
    const [plans, setPlans] = useState(initialPlans);
    const [newPlan, setNewPlan] = useState({ plan_name: '', description: '', amount: '' });
    const { flash, errors } = usePage().props;

    const handleAddPlan = async (e) => {
        e.preventDefault();
        // Add your API here to add a plan
        // setPlans([...plans, response.data]);
        setNewPlan({ plan_name: '', description: '', amount: '', paystack_plan_code: '', plan_type: '', active: true });
    };

    const handleDeletePlan = async (id) => {
        if (confirm('Are you sure you want to delete this plan?')) {
            router.post(route('plan.delete', id), {}, {
                preserveState: true,
                preserveScroll: true,
            });
        }
    };

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">
                    Plans Management
                </h2>
            }
        >
            <div className={styles.container}>
                {flash.success && <div className={styles.flashMessages}>{flash.success}</div>}
                
                <h3>Plans List</h3>
                <table className={styles.table}>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Description</th>
                            <th>Price</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {plans.map(plan => (
                            <tr key={plan.id}>
                                <td>{plan.id}</td>
                                <td>{plan.plan_name}</td>
                                <td>{plan.description}</td>
                                <td>{plan.amount}</td>
                                <td>
                                    <button onClick={() => handleDeletePlan(plan.id)} className={styles.deleteButton}>Delete</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                
                <h3>Add New Plan</h3>
                <form onSubmit={handleAddPlan} className={styles.form}>
                    <input 
                        type="text" 
                        placeholder="Plan Name" 
                        value={newPlan.plan_name} 
                        onChange={(e) => setNewPlan({ ...newPlan, plan_name: e.target.value })} 
                        required 
                    />
                    {errors.plan_name && <div className={styles.error}>{errors.plan_name}</div>}
                    <input 
                        type="text" 
                        placeholder="Description" 
                        value={newPlan.description} 
                        onChange={(e) => setNewPlan({ ...newPlan, description: e.target.value })} 
                    />
                    {errors.description && <div className={styles.error}>{errors.description}</div>}
                    <input 
                        type="number" 
                        placeholder="Price" 
                        value={newPlan.amount} 
                        onChange={(e) => setNewPlan({ ...newPlan, amount: e.target.value })} 
                        required 
                    />
                    {errors.amoun && <div className={styles.error}>{errors.amount}</div>}
                    <button type="submit" className={styles.addButton}>Add Plan</button>
                </form>
            </div>

            <Plugin plugins={initialPlugins} />
        </AuthenticatedLayout>
    );
}