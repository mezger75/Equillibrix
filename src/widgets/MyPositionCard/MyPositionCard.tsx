import React from "react";
import { Card, Button, Progress, Tooltip } from "@nextui-org/react";
import Image from 'next/image';
import EthIcon from '/public/eth.webp';
import UsdtIcon from '/public/usdt.webp';

interface MyPositionCardProps {
    id: string;
    token1: string;
    token2: string;
    collateral: number;
    debt: number;
    supplyAPY: number;
    borrowAPY: number;
    ratio: number;
    maxRatio: number;
    onManage?: () => void;
}

export const MyPositionCard: React.FC<MyPositionCardProps> = ({
    id,
    token1,
    token2,
    collateral,
    debt,
    supplyAPY,
    borrowAPY,
    ratio,
    maxRatio,
    onManage
}) => {
    return (
        <Card className="bg-[rgb(31,33,45)] bg-opacity-100 p-4 backdrop-blur-md">
            <div className="space-y-4">
                {/* Header */}
                <div className="flex justify-between items-center">
                    <div className="flex items-center gap-2">
                        <Image 
                            width={36}
                            height={36}
                            src={EthIcon}
                            alt="ether"
                            className="rounded-full overflow-hidden max-w-full h-auto"/>
                        <Image 
                            width={36}
                            height={36}
                            src={UsdtIcon}
                            alt="usdt"
                            className="mr-2 -ml-2 rounded-full overflow-hidden max-w-full h-auto"/>
                        <span className="text-white font-medium">
                            {token1} / {token2}
                        </span>
                    </div>
                </div>

                {/* Stats */}
                <div className="space-y-2">
                    <div className="flex justify-between items-center">
                        <span className="text-gray-400">Collateral</span>
                        <div className="flex items-center gap-1">
                            <span className="text-white">${collateral.toFixed(2)}</span>
                            <Tooltip content="Total collateral value">
                                <Button isIconOnly variant="light" size="sm" className="text-gray-400">
                                    ?
                                </Button>
                            </Tooltip>
                        </div>
                    </div>
                    <div className="flex justify-between items-center">
                        <span className="text-gray-400">Debt</span>
                        <div className="flex items-center gap-1">
                            <span className="text-white">${debt.toFixed(1)}</span>
                            <Tooltip content="Currenct debt">
                                <Button isIconOnly variant="light" size="sm" className="text-gray-400">
                                    ?
                                </Button>
                            </Tooltip>
                        </div>
                    </div>
                    <div className="flex justify-between items-center">
                        <span className="text-gray-400">Supply APY</span>
                        <span className="text-white">{supplyAPY.toFixed(2)}%</span>
                    </div>
                    <div className="flex justify-between items-center">
                        <span className="text-gray-400">Borrow APY</span>
                        <span className="text-white">{borrowAPY.toFixed(2)}%</span>
                    </div>
                </div>

                {/* Ratio */}
                <div className="space-y-2">
                    <div className="flex justify-between items-center">
                        <span className="text-gray-400">Ratio</span>
                        <span className="text-white">{ratio.toFixed(2)}%</span>
                        <span className="text-gray-400">MAX {maxRatio}%</span>
                    </div>
                    <Progress value={(ratio / maxRatio) * 100} className="h-2" color="success" />
                </div>

                {/* Manage Button */}
                <Button className="w-full bg-blue-600 text-white" onClick={onManage}>
                    Manage
                </Button>
            </div>
        </Card>
    );
};
