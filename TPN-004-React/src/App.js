import logo from './logo.svg';
import {Input, Typography, Layout, Space, Form, Button} from 'antd';
import { EditOutlined, SendOutlined } from '@ant-design/icons';
import { Header, Content } from 'antd/es/layout/layout';

function App() {
  const vocales = ['A', 'E', 'I', 'O', 'U'];
  function esVocal(letra){
    let i=0;
    while(vocales[i] !== letra && i < vocales.length){ 
      i++;
    }
    return vocales[i]=== letra;
  }
  function conteoVocales(values){
      
    let texto = values.texto.toUpperCase(), c=0;
    for(let letra in texto){
      if(esVocal(texto[letra])){
        c++;
      }
    }
    alert('Cantidad de vocales: \n'+ c);
    
  }
  
  return (
    <Layout className='layout'>
      <Header style={{height: '120px'}}>
      <Typography.Title
        level={1}
        mark
      >TP N°3 React - Captura de eventos
      </Typography.Title>
      </Header>
      <Content style={{padding:'4em', paddingInline:'30em', minHeight:'100vh'}}>
        <Space style={{width:'100%'}} direction={'vertical'}>
        <Typography.Title level={4} style={{textAlign:'left'}}> Hacer una app en react que: </Typography.Title>
        <Typography.Text >
          Tenga un control de formulario HTML <Typography.Text type="danger">input de tipo "text"</Typography.Text> y un botón que al presionarse muestre en un <Typography.Text type="danger">alert la cantidad de vocales ingresadas</Typography.Text> (realizarlo con una función de devuelva el resultado).
        </Typography.Text>
        <br />
        </Space>
        <Typography.Title level={2}>
          Ingreso de oración
        </Typography.Title>
        <Form key="form" name="form" onFinish={conteoVocales}>
            <Form.Item name={"texto"} rules={[{
              required: true, 
              message: 'Ingrese un texto válido, por favor'
            }]}>
              <Input size="large" placeholder="Ingrese un texto" prefix={<EditOutlined />} border />
            </Form.Item>
            
            <Form.Item>
              <Button icon={<SendOutlined />} type='primary'  size='large' htmlType='submit' className='login-form-button' style={{float:'right', width:'20%'} } >Enviar</Button>
            </Form.Item>
          </Form>
      </Content>
    </Layout>
  );
}

export default App;
