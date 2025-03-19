import { Expression } from "../entities/Expression.entity";
import { CronService } from "./cron/cron-service";

export class Server {
    async start() {
        //Expression.addExpressionsToQueue();
        CronService.createJob(
            '*/1 * * * *',
            () => {
                const now = new Date();
                const hours = now.getHours().toString().padStart(2, '0');  
                const minutes = now.getMinutes().toString().padStart(2, '0');
        
                console.log(`Executed at: ${hours}:${minutes}`);
            }
        );
    }
}