import Invoker from '@/behavioral/command/invoker'
import SimpleCommand from '@/behavioral/command/simple.command'
import Receiver from '@/behavioral/command/receiver'
import ComplexCommand from '@/behavioral/command/complex.command'

const invoker = new Invoker()
invoker.setStartCommand(new SimpleCommand('심플 커맨드!'))

const receiver = new Receiver()
invoker.setEndCommand(new ComplexCommand(receiver, '복잡한', '커맨드'))

invoker.someInvokedFunc()
