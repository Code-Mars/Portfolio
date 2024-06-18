import { useDisclosure } from '@mantine/hooks';
import { Drawer, Button } from '@mantine/core';
import { IconHexagonLetterC, IconX } from '@tabler/icons-react';

const SideBar=()=> {
  const [opened, { open, close }] = useDisclosure(false);

  return (
    <>

      
      <Drawer.Root className='md:hidden'  position='right' opened={opened}   onClose={close} size="50vw" >
        <Drawer.Overlay style={{ backgroundOpacity: 0.5, blur: 4 }} />
        <Drawer.Content bg="#0A192F">
          <Drawer.Header bg="#0A192F">
            <Drawer.Title ><IconHexagonLetterC size={48} color="#64FFDA" stroke={1.25}/></Drawer.Title>
            <Drawer.CloseButton className='hover:!bg-bgColor hover:!text-white'
          icon= <IconX className='hover:text-primaryColor' size={30} stroke={2} />/>
            
          </Drawer.Header>
          <Drawer.Body bg="#0A192F">Drawer content</Drawer.Body>
        </Drawer.Content>
      </Drawer.Root>

      <Button className='md:!hidden' onClick={open}>Open Drawer</Button>
    </>
  );
}
export default SideBar;