pragma solidity ^0.4.25;

contract Proxy {
    address public _currentImplementation;

    constructor(address _initialImplementation) public {
        _currentImplementation = _initialImplementation;
    }

    function() public payable {
        bool callSuccess = _currentImplementation.delegatecall(msg.data);

        if (callSuccess) {
            assembly {
                returndatacopy(0x0, 0x0, returndatasize)
                return(0x0, returndatasize)
            }
        } else {
            revert();
        }

    }

}
