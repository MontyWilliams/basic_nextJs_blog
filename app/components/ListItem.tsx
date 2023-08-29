import Link from 'next/link'
import getFormateedDate from "@/lib/getFormattedDate"

type Props = {
  post: BlogPost
}

export default function ListItem({post}: Props) {
  const { id, title, date }  = post 
  return (
    <div className="">

    </div>
  )
}
