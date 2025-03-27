
type Props = {
    children?: React.ReactNode;
}
const AgentScrollLayout:React.FC<Props> = ({
                                           children
                                       }) => {
    return <div className={'ckt-agent-scroll-layout flex-1 height-1 flex column gap-24 py-24 width-100 overflow-auto scrollbar-none'}>
        {children}
    </div>
}
export default AgentScrollLayout;