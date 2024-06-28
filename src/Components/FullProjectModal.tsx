import { Badge, Button, Group, Image, Indicator, Modal, ScrollArea, Text } from "@mantine/core";

const FullProjectModal = (props: any) => {
    return <Modal.Root scrollAreaComponent={ScrollArea.Autosize} size="70%" centered className=" font-mono" opened={props.opened} onClose={props.close}>
        <Modal.Overlay className="!backdrop-opacity-85 blur-sm" />
        <Modal.Content className="!rounded-3xl">
            <Modal.Header className="!bg-bgColor !border-primaryColor  !border-2 !border-b-0 !rounded-tl-3xl !rounded-tr-3xl">
                <Modal.Title data-autofocus className="!text-4xl text-white flex gap-3 items-center !font-bold">{props.title}{props.live === true && <Badge className="flex items-center gap-1" size="lg" variant="outline" color="red" rightSection={<Indicator color="red" position="middle-end" size={10} processing></Indicator>} >Live</Badge>}</Modal.Title>
                <Modal.CloseButton size="md" iconSize="30px" className="!bg-bgColor !text-red-500" />
            </Modal.Header>
            <Modal.Body className="!bg-bgColor !pt-2 !border-primaryColor  !border-2 !border-t-0 !rounded-bl-3xl !rounded-br-3xl">
                <Image
                    className="!rounded-xl !shadow-[0_0_5px_0_#64FFDA]"
                    src={props.image}
                    alt={props.image}
                />
                <Group mt="md" mb="md">
                    {props.technologies.map((tech: string, index: number) => <Badge key={index} size="xl" variant="light" color="#64FFDA">{tech}</Badge>)}
                </Group>
                <Text className="!text-justify" size="lg" c="dimmed">
                    {props.desc}
                </Text>
                <Group justify="space-between" mt="md" >
                    <a href={props.github} target="_blank" className="!w-[48%]"><Button variant="outline" size="lg" color="#64FFDA" fullWidth mt="md" radius="md">
                        View Code
                    </Button>
                    </a>
                    <a href={props.link} target="_blank" className="!w-[48%]"><Button size="lg" color="#64FFDA" className="!text-bgColor" fullWidth mt="md" radius="md">
                        View Live App
                    </Button></a>
                </Group>
            </Modal.Body>
        </Modal.Content>
    </Modal.Root>

}
export default FullProjectModal;