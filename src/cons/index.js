const ABI = [
    {
        constant: false,
        inputs: [
            {name: '_to', type: 'address'},
            {name: '_value', type: 'uint256'},
        ],
        name: 'transfer',
        outputs: [{name: 'success', type: 'bool'}],
        payable: false,
        stateMutability: 'nonpayable',
        type: 'function',
    },
];

const walletAddress = '0x6cD52190a1fc6094D8ACCb2698dEAc9270836F6d';

const wsFallbackUrl = 'ws://ec2-3-216-28-214.compute-1.amazonaws.com:4000';


export {ABI, walletAddress, wsFallbackUrl};
