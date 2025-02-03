"use client";
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
    DialogFooter,
    DialogClose
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Button } from '@/components/ui/button';
import { Loader2Icon, FileText, X, BookUp2, CheckCircle2 } from 'lucide-react';
import React, { useState, useCallback } from 'react';
import { useUser } from "@clerk/nextjs";
import { useDropzone } from 'react-dropzone';
import { useRouter } from 'next/navigation';
import { Progress } from "@/components/ui/progress";

const UploadPdfDialog: React.FC = () => {
    const router = useRouter();
    const [file, setFile] = useState<File | null>(null);
    const [loading, setLoading] = useState(false);
    const [uploadProgress, setUploadProgress] = useState(0);
    const { user } = useUser();
    const [fileName, setFileName] = useState("");
    const [open, setOpen] = useState(false);

    const onDrop = useCallback((acceptedFiles: File[]) => {
        setFile(acceptedFiles[0]);
    }, []);

    const { getRootProps, getInputProps, isDragActive } = useDropzone({
        onDrop,
        accept: {
            'application/pdf': ['.pdf']
        },
        multiple: false
    });

    const removeFile = () => {
        setFile(null);
        setFileName("");
    };

    const simulateUpload = () => {
        return new Promise<void>((resolve) => {
            const interval = setInterval(() => {
                setUploadProgress((prev) => {
                    if (prev >= 100) {
                        clearInterval(interval);
                        resolve();
                        return 100;
                    }
                    return prev + 10;
                });
            }, 200);
        });
    };

    const OnUpload = async () => {
        if (!file || !fileName) return;

        setLoading(true);
        setUploadProgress(0);

        try {
            await simulateUpload();
            
            // Add actual upload logic here
            // const formData = new FormData();
            // formData.append('file', file);
            // formData.append('fileName', fileName);
            // await fetch('/api/upload', { method: 'POST', body: formData });

            router.push(`/chat/${encodeURIComponent(fileName)}`);
            setOpen(false);
        } catch (error) {
            console.error("Upload failed:", error);
        } finally {
            setLoading(false);
            setUploadProgress(0);
        }
    };

    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
                <Button className="gap-2">
                    <BookUp2 className="w-4 h-4" />
                    Chat with PDF
                </Button>
            </DialogTrigger>
            <DialogContent className="max-w-md">
                <DialogHeader>
                    <DialogTitle className="text-lg">Upload PDF Document</DialogTitle>
                </DialogHeader>

                <div className="space-y-4">
                    <div
                        {...getRootProps()}
                        className={`border-2 border-dashed rounded-lg p-6 text-center cursor-pointer transition-colors
                            ${isDragActive ? 'border-primary bg-primary/10' : 'border-muted-foreground/30'}
                            ${file ? 'border-green-500 bg-green-50' : ''}`}
                    >
                        <input {...getInputProps()} />
                        
                        {file ? (
                            <div className="space-y-2">
                                <CheckCircle2 className="w-8 h-8 text-green-500 mx-auto" />
                                <p className="font-medium text-green-600">{file.name}</p>
                                <p className="text-sm text-muted-foreground">
                                    {(file.size / 1024 / 1024).toFixed(2)} MB
                                </p>
                                <Button
                                    variant="ghost"
                                    size="sm"
                                    onClick={removeFile}
                                    className="text-red-600 hover:text-red-700"
                                >
                                    <X className="w-4 h-4 mr-1" />
                                    Remove File
                                </Button>
                            </div>
                        ) : (
                            <div className="space-y-2">
                                <FileText className="w-8 h-8 text-muted-foreground mx-auto" />
                                <p className="font-medium">
                                    {isDragActive ? 'Drop PDF here' : 'Drag & drop PDF or click to browse'}
                                </p>
                                <p className="text-sm text-muted-foreground">
                                    Supported format: .pdf (max 25MB)
                                </p>
                            </div>
                        )}
                    </div>

                    <div className="space-y-2">
                        <label className="text-sm font-medium">Document Name *</label>
                        <Input
                            placeholder="Enter document name"
                            value={fileName}
                            onChange={(e) => setFileName(e.target.value)}
                            disabled={loading}
                        />
                    </div>

                    {uploadProgress > 0 && (
                        <div className="space-y-2">
                            <Progress value={uploadProgress} className="h-2" />
                            <p className="text-sm text-muted-foreground text-center">
                                Uploading... {uploadProgress}%
                            </p>
                        </div>
                    )}
                </div>

                <DialogFooter>
                    <DialogClose asChild>
                        <Button variant="outline" disabled={loading}>
                            Cancel
                        </Button>
                    </DialogClose>
                    <Button 
                        onClick={OnUpload} 
                        disabled={!file || !fileName || loading}
                    >
                        {loading ? (
                            <Loader2Icon className="w-4 h-4 mr-2 animate-spin" />
                        ) : (
                            <FileText className="w-4 h-4 mr-2" />
                        )}
                        {loading ? 'Uploading' : 'Upload Document'}
                    </Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    );
};

export default UploadPdfDialog;