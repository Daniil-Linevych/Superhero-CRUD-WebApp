import {prisma} from './../db/db'

export async function nicknameExists(nickname:string, excludeId?:number): Promise<boolean> {
    const superhero = await prisma.superhero.findFirst({
      where: { 
        nickname: nickname,
        ...(excludeId && { NOT: { id: excludeId } })
      }
    });
    return !!superhero;
}