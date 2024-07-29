import React, { useState } from "react";
import styles from '../../css/plan.module.css';

export default function Plugin({ plugins: initialPlugins }) {
    const [plugins, setPlugins] = useState(initialPlugins);
    const [newPlugin, setNewPlugin] = useState({
        plugin_code: '',
        name: '',
        image: '',
        solution: '',
        description: '',
        long_description: '',
        documentation_url: '',
        amount: '',
        version: '',
        vendor: ''
    });

    const handleAddPlugin = async (e) => {
        e.preventDefault();
        // Add your API here to add a plugin
        // setPlugins([...plugins, response.data]);
        setNewPlugin({
            plugin_code: '',
            name: '',
            image: '',
            solution: '',
            description: '',
            long_description: '',
            documentation_url: '',
            amount: '',
            version: '',
            vendor: ''
        });
    };

    const handleDeletePlugin = async (id) => {
        // Add your API here to delete a plugin
        // setPlugins(plugins.filter(plugin => plugin.id !== id));
    };

    return (
        <div className={styles.container}>
            <h3>Plugins List</h3>
            <table className={styles.table}>
                <thead>
                    <tr>
                        <th>Plugin Code</th>
                        <th>Name</th>
                        <th>Image</th>
                        <th>Solution</th>
                        <th>Description</th>
                        <th>Long Description</th>
                        <th>Documentation URL</th>
                        <th>Amount</th>
                        <th>Version</th>
                        <th>Vendor</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {plugins.map(plugin => (
                        <tr key={plugin.id}>
                            <td>{plugin.plugin_code}</td>
                            <td>{plugin.name}</td>
                            <td><img src={plugin.image} alt={plugin.name} style={{ width: '50px' }} /></td>
                            <td>{plugin.solution}</td>
                            <td>{plugin.description}</td>
                            <td>{plugin.long_description}</td>
                            <td><a href={plugin.documentation_url} target="_blank" rel="noopener noreferrer">{plugin.documentation_url}</a></td>
                            <td>{plugin.amount}</td>
                            <td>{plugin.version}</td>
                            <td>{plugin.vendor}</td>
                            <td>
                                <button onClick={() => handleDeletePlugin(plugin.id)} className={styles.deleteButton}>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

            <h3>Add New Plugin</h3>
            <form onSubmit={handleAddPlugin} className={styles.form}>
                <input
                    type="text"
                    placeholder="Plugin Code"
                    value={newPlugin.plugin_code}
                    onChange={(e) => setNewPlugin({ ...newPlugin, plugin_code: e.target.value })}
                    required
                />
                <input
                    type="text"
                    placeholder="Name"
                    value={newPlugin.name}
                    onChange={(e) => setNewPlugin({ ...newPlugin, name: e.target.value })}
                    required
                />
                <input
                    type="text"
                    placeholder="Image URL"
                    value={newPlugin.image}
                    onChange={(e) => setNewPlugin({ ...newPlugin, image: e.target.value })}
                />
                <input
                    type="text"
                    placeholder="Solution"
                    value={newPlugin.solution}
                    onChange={(e) => setNewPlugin({ ...newPlugin, solution: e.target.value })}
                />
                <input
                    type="text"
                    placeholder="Description"
                    value={newPlugin.description}
                    onChange={(e) => setNewPlugin({ ...newPlugin, description: e.target.value })}
                />
                <input
                    type="text"
                    placeholder="Long Description"
                    value={newPlugin.long_description}
                    onChange={(e) => setNewPlugin({ ...newPlugin, long_description: e.target.value })}
                />
                <input
                    type="text"
                    placeholder="Documentation URL"
                    value={newPlugin.documentation_url}
                    onChange={(e) => setNewPlugin({ ...newPlugin, documentation_url: e.target.value })}
                />
                <input
                    type="number"
                    placeholder="Amount"
                    value={newPlugin.amount}
                    onChange={(e) => setNewPlugin({ ...newPlugin, amount: e.target.value })}
                />
                <input
                    type="text"
                    placeholder="Version"
                    value={newPlugin.version}
                    onChange={(e) => setNewPlugin({ ...newPlugin, version: e.target.value })}
                />
                <input
                    type="text"
                    placeholder="Vendor"
                    value={newPlugin.vendor}
                    onChange={(e) => setNewPlugin({ ...newPlugin, vendor: e.target.value })}
                />
                <button type="submit" className={styles.addButton}>Add Plugin</button>
            </form>
        </div>
    );
}
