import { CentralHub } from './centralHub';
import { DeviceFactory } from './deviceFactory';
import * as readline from 'readline';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const centralHub = new CentralHub();

function prompt(question: string): Promise<string> {
    return new Promise(resolve => rl.question(question, resolve));
}

async function main() {
    let running = true;

    while (running) {
        console.log(`
1. Add Device
2. Remove Device
3. Turn Device On
4. Turn Device Off
5. Schedule Device
6. Remove Scheduled Task
7. Show Status
8. Show Scheduled Tasks
9. Add Trigger
10. Remove Trigger
11. Exit
`);
        
        const choice = await prompt("Choose an option: ");

        switch (choice) {
            case '1':
                const deviceName = await prompt("Enter device name (light, thermostat, door): ");
                const deviceId = await prompt("Enter device ID: ");
                const device = DeviceFactory.createDevice(deviceName, deviceId);
                if (device) {
                    centralHub.addDevice(device);
                }
                break;

            case '2':
                const removeDeviceName = await prompt("Enter device name to remove: ");
                const removeDeviceId = await prompt("Enter device ID to remove: ");
                centralHub.removeDevice(removeDeviceName, removeDeviceId);
                break;

            case '3':
                const turnOnDeviceName = await prompt("Enter device name to turn on: ");
                const turnOnDeviceId = await prompt("Enter device ID to turn on: ");
                centralHub.turnDeviceOn(turnOnDeviceName, turnOnDeviceId);
                break;

            case '4':
                const turnOffDeviceName = await prompt("Enter device name to turn off: ");
                const turnOffDeviceId = await prompt("Enter device ID to turn off: ");
                centralHub.turnDeviceOff(turnOffDeviceName, turnOffDeviceId);
                break;

            case '5':
                const scheduleDeviceName = await prompt("Enter device name to schedule: ");
                const scheduleDeviceId = await prompt("Enter device ID to schedule: ");
                const scheduleTime = await prompt("Enter time in HH:MM format (24-hour): ");
                centralHub.scheduleDevice(scheduleDeviceName, scheduleDeviceId, scheduleTime);
                break;

            case '6':
                const removeTaskDeviceName = await prompt("Enter device name for scheduled task to remove: ");
                const removeTaskDeviceId = await prompt("Enter device ID for scheduled task to remove: ");
                centralHub.removeScheduledTask(removeTaskDeviceName, removeTaskDeviceId);
                break;

            case '7':
                centralHub.showStatus();
                break;

            case '8':
                const scheduledTasks = centralHub.getScheduledTasks();
                if (scheduledTasks.length === 0) {
                    console.log("No scheduled tasks.");
                } else {
                    console.log("Scheduled Tasks:");
                    scheduledTasks.forEach(task => {
                        console.log(`- Device: ${task.name}, ID: ${task.id}, Time: ${task.time}`);
                    });
                }
                break;

            case '9':
                const triggerName = await prompt("Enter device name to add trigger: ");
                const triggerId = await prompt("Enter device ID to add trigger: ");
                const condition = await prompt("Enter trigger condition: ");
                centralHub.addTrigger(triggerName, triggerId, condition);
                break;

            case '10':
                const removeTriggerName = await prompt("Enter device name for trigger to remove: ");
                const removeTriggerId = await prompt("Enter device ID for trigger to remove: ");
                centralHub.removeTrigger(removeTriggerName, removeTriggerId);
                break;

            case '11':
                console.log("Exiting...");
                running = false;
                break;

            default:
                console.log("Invalid option. Please try again.");
                break;
        }
    }

    rl.close();
}

main();
