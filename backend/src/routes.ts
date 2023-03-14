import {FastifyInstance} from 'fastify'
import { prisma } from "./lib/prisma"
import dayjs from "dayjs"
import { z } from "zod"

export async function AppRoutes(app: FastifyInstance){
    app.get('/hello2', async () => {
        const habits = await prisma.habit.findMany({
            where: {
                title: {
                    startsWith: 'beber'
                }
            }        
        })

        return habits
    })

    app.post('/habits', async (request) => {
        const createHabitBody = z.object({
          title: z.string(),
          weekDays: z.array(
            z.number().min(0).max(6)
          )
        })
        const { title, weekDays } = createHabitBody.parse(request.body)
        const today = dayjs().startOf('day').toDate()
        await prisma.habit.create({
          data: {
            title,
            created_at: today,
            weekDays: {
              create: weekDays.map(weekDay => {
                return {
                  week_day: weekDay
                }
              })
            }
          }
        })
      })
    
}
