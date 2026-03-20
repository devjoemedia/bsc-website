'use client'
import { Button } from '@/components/ui/button'
import { Drawer, DrawerClose, DrawerContent, DrawerFooter } from '@/components/ui/drawer'
import { motion } from 'motion/react'
import { staggerChildVariants } from '@/components/main-page/scroll-reveal'
import RichTextRenderer from '../rich-text-renderer'
import { CommunityMember, Media } from '@/payload-types'
import Image from 'next/image'

export function MemberDetails({
  member,
  isOpen,
  setIsOpen,
}: {
  member: CommunityMember | null
  isOpen: boolean
  setIsOpen: (isOpen: boolean) => void
}) {
  if (!member) return null

  return (
    <Drawer direction="right" open={isOpen} onOpenChange={setIsOpen}>
      <DrawerContent className="rounded-none!">
        <div className="flex-1 overflow-y-auto px-4 py-4">
          <div className="flex flex-col gap-3">
            <motion.button
              onClick={() => setIsOpen(true)}
              key={member.name}
              variants={staggerChildVariants}
              whileHover={{ y: -6, transition: { duration: 0.3 } }}
              className="group relative  bg-white p-8  text-center "
            >
              {/* Avatar placeholder */}
              <div className="mx-auto h-32 w-32 rounded-full bg-linear-to-br from-primary-light to-primary flex items-center justify-center mb-4">
                {/* <span className="text-2xl font-bold text-white">
                  {member.name && member.name
                    .split(" ")
                    .map((n: string) => n[0])
                    .join("")}
                </span> */}
                <Image
                  alt={(member.photo as Media).alt as string}
                  src={(member.photo as Media).url as string}
                  height={100}
                  width={1200}
                  className="h-32 w-32 object-cover rounded-full"
                />
              </div>
              <h4 className="text-lg font-bold text-gray-900">{member.name}</h4>
              <p className="text-sm text-primary font-medium">{member.role}</p>
            </motion.button>

            <div className="px-5">
              <div className="text-xs text-gray-400 transition-colors ">
                {member.description && <RichTextRenderer content={member.description} />}
              </div>
            </div>
          </div>
        </div>
        <DrawerFooter className="flex flex-row border-t bg-background px-4 py-4">
          <DrawerClose className="flex-1" asChild>
            <Button variant="default" className=" text-white py-5 cursor-pointer">
              Close
            </Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  )
}
