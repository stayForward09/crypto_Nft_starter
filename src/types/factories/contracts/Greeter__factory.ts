/* Autogenerated file. Do not edit manually. */

/* tslint:disable */

/* eslint-disable */
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";

import type { PromiseOrValue } from "../../common";
import type { Greeter, GreeterInterface } from "../../contracts/Greeter";

const _abi = [
  {
    inputs: [
      {
        internalType: "string",
        name: "_greeting",
        type: "string",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [],
    name: "greet",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "_greeting",
        type: "string",
      },
    ],
    name: "setGreeting",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

const _bytecode =
  "0x60806040523480156200001157600080fd5b50604051620010453803806200104583398181016040528101906200003791906200031e565b620000626040518060600160405280602281526020016200102360229139826200007b60201b60201c565b8060009081620000739190620005ba565b50506200075d565b6200011d828260405160240162000094929190620006f3565b6040516020818303038152906040527f4b5c4277000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19166020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff83818316178352505050506200012160201b60201c565b5050565b6200014781620001426200014a60201b620001c7176200016b60201b60201c565b60201c565b50565b60006a636f6e736f6c652e6c6f679050600080835160208501845afa505050565b6200017f60201b620002ac17819050919050565b620001896200072e565b565b6000604051905090565b600080fd5b600080fd5b600080fd5b600080fd5b6000601f19601f8301169050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b620001f482620001a9565b810181811067ffffffffffffffff82111715620002165762000215620001ba565b5b80604052505050565b60006200022b6200018b565b9050620002398282620001e9565b919050565b600067ffffffffffffffff8211156200025c576200025b620001ba565b5b6200026782620001a9565b9050602081019050919050565b60005b838110156200029457808201518184015260208101905062000277565b60008484015250505050565b6000620002b7620002b1846200023e565b6200021f565b905082815260208101848484011115620002d657620002d5620001a4565b5b620002e384828562000274565b509392505050565b600082601f8301126200030357620003026200019f565b5b815162000315848260208601620002a0565b91505092915050565b60006020828403121562000337576200033662000195565b5b600082015167ffffffffffffffff8111156200035857620003576200019a565b5b6200036684828501620002eb565b91505092915050565b600081519050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b60006002820490506001821680620003c257607f821691505b602082108103620003d857620003d76200037a565b5b50919050565b60008190508160005260206000209050919050565b60006020601f8301049050919050565b600082821b905092915050565b600060088302620004427fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8262000403565b6200044e868362000403565b95508019841693508086168417925050509392505050565b6000819050919050565b6000819050919050565b60006200049b620004956200048f8462000466565b62000470565b62000466565b9050919050565b6000819050919050565b620004b7836200047a565b620004cf620004c682620004a2565b84845462000410565b825550505050565b600090565b620004e6620004d7565b620004f3818484620004ac565b505050565b5b818110156200051b576200050f600082620004dc565b600181019050620004f9565b5050565b601f8211156200056a576200053481620003de565b6200053f84620003f3565b810160208510156200054f578190505b620005676200055e85620003f3565b830182620004f8565b50505b505050565b600082821c905092915050565b60006200058f600019846008026200056f565b1980831691505092915050565b6000620005aa83836200057c565b9150826002028217905092915050565b620005c5826200036f565b67ffffffffffffffff811115620005e157620005e0620001ba565b5b620005ed8254620003a9565b620005fa8282856200051f565b600060209050601f8311600181146200063257600084156200061d578287015190505b6200062985826200059c565b86555062000699565b601f1984166200064286620003de565b60005b828110156200066c5784890151825560018201915060208501945060208101905062000645565b868310156200068c578489015162000688601f8916826200057c565b8355505b6001600288020188555050505b505050505050565b600082825260208201905092915050565b6000620006bf826200036f565b620006cb8185620006a1565b9350620006dd81856020860162000274565b620006e881620001a9565b840191505092915050565b600060408201905081810360008301526200070f8185620006b2565b90508181036020830152620007258184620006b2565b90509392505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052605160045260246000fd5b6108b6806200076d6000396000f3fe608060405234801561001057600080fd5b50600436106100365760003560e01c8063a41368621461003b578063cfae321714610057575b600080fd5b61005560048036038101906100509190610410565b610075565b005b61005f610135565b60405161006c91906104d8565b60405180910390f35b61012260405180606001604052806023815260200161085e602391396000805461009e90610529565b80601f01602080910402602001604051908101604052809291908181526020018280546100ca90610529565b80156101175780601f106100ec57610100808354040283529160200191610117565b820191906000526020600020905b8154815290600101906020018083116100fa57829003601f168201915b5050505050836101e8565b80600090816101319190610710565b5050565b60606000805461014490610529565b80601f016020809104026020016040519081016040528092919081815260200182805461017090610529565b80156101bd5780601f10610192576101008083540402835291602001916101bd565b820191906000526020600020905b8154815290600101906020018083116101a057829003601f168201915b5050505050905090565b60006a636f6e736f6c652e6c6f679050600080835160208501845afa505050565b610282838383604051602401610200939291906107e2565b6040516020818303038152906040527f2ced7cef000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19166020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff8381831617835250505050610287565b505050565b61029e816102966101c76102a1565b63ffffffff16565b50565b6102ac819050919050565b6102b461082e565b565b6000604051905090565b600080fd5b600080fd5b600080fd5b600080fd5b6000601f19601f8301169050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b61031d826102d4565b810181811067ffffffffffffffff8211171561033c5761033b6102e5565b5b80604052505050565b600061034f6102b6565b905061035b8282610314565b919050565b600067ffffffffffffffff82111561037b5761037a6102e5565b5b610384826102d4565b9050602081019050919050565b82818337600083830152505050565b60006103b36103ae84610360565b610345565b9050828152602081018484840111156103cf576103ce6102cf565b5b6103da848285610391565b509392505050565b600082601f8301126103f7576103f66102ca565b5b81356104078482602086016103a0565b91505092915050565b600060208284031215610426576104256102c0565b5b600082013567ffffffffffffffff811115610444576104436102c5565b5b610450848285016103e2565b91505092915050565b600081519050919050565b600082825260208201905092915050565b60005b83811015610493578082015181840152602081019050610478565b60008484015250505050565b60006104aa82610459565b6104b48185610464565b93506104c4818560208601610475565b6104cd816102d4565b840191505092915050565b600060208201905081810360008301526104f2818461049f565b905092915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b6000600282049050600182168061054157607f821691505b602082108103610554576105536104fa565b5b50919050565b60008190508160005260206000209050919050565b60006020601f8301049050919050565b600082821b905092915050565b6000600883026105bc7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8261057f565b6105c6868361057f565b95508019841693508086168417925050509392505050565b6000819050919050565b6000819050919050565b600061060d610608610603846105de565b6105e8565b6105de565b9050919050565b6000819050919050565b610627836105f2565b61063b61063382610614565b84845461058c565b825550505050565b600090565b610650610643565b61065b81848461061e565b505050565b5b8181101561067f57610674600082610648565b600181019050610661565b5050565b601f8211156106c4576106958161055a565b61069e8461056f565b810160208510156106ad578190505b6106c16106b98561056f565b830182610660565b50505b505050565b600082821c905092915050565b60006106e7600019846008026106c9565b1980831691505092915050565b600061070083836106d6565b9150826002028217905092915050565b61071982610459565b67ffffffffffffffff811115610732576107316102e5565b5b61073c8254610529565b610747828285610683565b600060209050601f83116001811461077a5760008415610768578287015190505b61077285826106f4565b8655506107da565b601f1984166107888661055a565b60005b828110156107b05784890151825560018201915060208501945060208101905061078b565b868310156107cd57848901516107c9601f8916826106d6565b8355505b6001600288020188555050505b505050505050565b600060608201905081810360008301526107fc818661049f565b90508181036020830152610810818561049f565b90508181036040830152610824818461049f565b9050949350505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052605160045260246000fdfe4368616e67696e67206772656574696e672066726f6d202725732720746f2027257327a2646970667358221220a43de5a34d1bf48319267297550cbc96faf5f96ce767e158338e5f77a3a4e60464736f6c634300081400334465706c6f79696e67206120477265657465722077697468206772656574696e673a";

type GreeterConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (xs: GreeterConstructorParams): xs is ConstructorParameters<typeof ContractFactory> =>
  xs.length > 1;

export class Greeter__factory extends ContractFactory {
  constructor(...args: GreeterConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    _greeting: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> },
  ): Promise<Greeter> {
    return super.deploy(_greeting, overrides || {}) as Promise<Greeter>;
  }
  override getDeployTransaction(
    _greeting: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> },
  ): TransactionRequest {
    return super.getDeployTransaction(_greeting, overrides || {});
  }
  override attach(address: string): Greeter {
    return super.attach(address) as Greeter;
  }
  override connect(signer: Signer): Greeter__factory {
    return super.connect(signer) as Greeter__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): GreeterInterface {
    return new utils.Interface(_abi) as GreeterInterface;
  }
  static connect(address: string, signerOrProvider: Signer | Provider): Greeter {
    return new Contract(address, _abi, signerOrProvider) as Greeter;
  }
}