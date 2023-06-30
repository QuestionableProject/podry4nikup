import Line from '@/components/svg/line'

export default function Layout({children}) {
    return (
        <div>
            {children}
            <Line/>
        </div>
    )
}